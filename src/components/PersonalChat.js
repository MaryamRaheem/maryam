import React, { useEffect, useState, useRef } from 'react';
import { Box, Container, Typography, Avatar, TextField, IconButton } from '@mui/material';
import { useParams } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector, } from 'react-redux';
import userAvatar from '../assets/Avatar.png';
import { SendMessage, ReceiveMessages } from '../features/auth/authSlice';
import io from 'socket.io-client';  // Import Socket.io

const PersonalChat = () => {
  const { name } = useParams();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const dispatch = useDispatch();
  const user_id = localStorage.getItem('user_id'); // Get current user's ID from localStorage
  const conversation_id = localStorage.getItem('conversation_id'); // Get conversation ID from localStorage
  const token = localStorage.getItem('token'); // Assuming you have a token for authentication
  const socketRef = useRef();
  useEffect(() => {
    socketRef.current = io('http://localhost:4000', {
      auth: { token },
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [token]);

  useEffect(() => {
    if (conversation_id) {
      socketRef.current.emit('joinRoom', conversation_id);

      socketRef.current.on('receiveMessage', (newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      });

      return () => {
        socketRef.current.off('receiveMessage');
        socketRef.current.emit('leaveRoom', conversation_id);  // Optional: Leave the room when the conversation_id changes
      };
    }
  }, [conversation_id]);


  //   useEffect(() => {
  //     // Initialize Socket.io client
  //     socketRef.current = io('http://localhost:4000', {
  //       auth: {
  //         token,
  //       },
  //     });



  //     socketRef.current.emit('joinRoom', conversation_id);

  //     // Listen for incoming messages
  //     socketRef.current.on('receiveMessage', (newMessage) => {
  //       setMessages((prevMessages) => [...prevMessages, newMessage]);
  //     });

  //     // Cleanup on component unmount
  //   //   return () => {
  //   //     socket.off('receiveMessage');
  //   //     socket.disconnect();
  //   //   };
  //   // }, [conversation_id, token]);

  //   return () => {
  //     socketRef.current.off('receiveMessage');
  //     console.log('user connected from frontned');
  //     socketRef.current.disconnect();
  //   };
  // }, [conversation_id, token]);


  useEffect(() => {
    // Dispatch ReceiveMessages thunk when the component mounts
    dispatch(ReceiveMessages())
      .unwrap()
      .then((filteredMessages) => {
        setMessages(filteredMessages);
      })
      .catch((error) => {
        console.error('Failed to load messages:', error);
      });
  }, [dispatch]);

  useEffect(() => {
    if (messages) {
      console.log("i ama here")
      console.log(messages);
    }
  }, [messages])

  const handleSendMessage = () => {
    if (message.trim() && conversation_id) {
      const newMessage = {
        message: message,
        timestamp: Date.now(),
        sender: user_id,
      };

      // setMessages([...messages, newMessage]);
      setMessage('');

      // Dispatch the SendMessage thunk
      dispatch(SendMessage({
        conversation_id: conversation_id,
        message: message,
      }));

      dispatch(ReceiveMessages())

      // Emit the message using the existing Socket.io connection
      // socketRef.current.emit('sendMessage', { conversation_id, content: message });
      socketRef.current.emit('sendMessage', { conversationId: conversation_id, message: message });
      console.log('Message sent:', message);
    }
  };



  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        backgroundColor: '#f5f5f5'
      }}
    >
      <Box sx={{ width: '27%', display: 'flex', flexDirection: 'column', backgroundColor: 'white' }}>
        {/* Sidebar content */}
      </Box>

      <Box sx={{ width: '70%', display: 'flex', flexDirection: 'column', backgroundColor: '#fff' }}>
        <Box sx={{ padding: 2, display: 'flex', alignItems: 'center', borderBottom: '1px solid #eee' }}>
          <Avatar src={userAvatar} />
          <Typography variant="h6" sx={{ marginLeft: 2 }}>{name}</Typography>
        </Box>
        <Box sx={{ flex: 1, padding: 2, overflowY: 'auto' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {messages.map((msg, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  marginBottom: 2,
                  justifyContent: msg.sender === user_id ? 'flex-end' : 'flex-start'
                }}
              >
                <Typography variant="body1" sx={{ marginRight: 2 }}>{msg.message}</Typography>
                <Typography variant="body2" color="textSecondary">{new Date(msg.timestamp).toLocaleString()}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Box sx={{ padding: 2, borderTop: '1px solid #eee', display: 'flex', alignItems: 'center' }}>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            placeholder="Type a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <IconButton color="primary" onClick={handleSendMessage}>
            <SendIcon />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};

export default PersonalChat;
