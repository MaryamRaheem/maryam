import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Avatar, FormControl, InputAdornment, TextField, InputLabel, IconButton } from '@mui/material';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch,useSelector } from 'react-redux';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import userAvatar from '../assets/Avatar.png';
import { SendMessage } from '../features/auth/authSlice';



const PersonalChat = () => {
  const { name } = useParams();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [showClearIcon, setShowClearIcon] = useState("none");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const chatList = useSelector((state) => state.auth.chatList);
  const token= useSelector((state) => state.auth.token);
  const routeLocation = useLocation();
  const conversation_id = useSelector((state) => state.auth.error);
  const dispatch= useDispatch();


  useEffect(() => {
    if (routeLocation.state?.lastMessage) {
      setMessages([routeLocation.state.lastMessage]);
    }
  }, [routeLocation.state]);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
  };

  const handleClick = () => {
    setSearchQuery("");
    setShowClearIcon("none");
  };

  const handleChatClick = (name) => {
    navigate(`/personal-chat/${name}`);
  };

  // const handleSendMessage = () => {
  //   if (message.trim()) {
  //     const newMessage = {
  //       message: message,
  //       timestamp: Date.now(),
  //       user: name,
  //     };
  
  //     // Update the local messages state with the new message
  //     setMessages([...messages, newMessage]);
  //     setMessage(''); // Clear the input field after sending the message
  
  //     // Dispatch the SendMessage action with the correct arguments
  //     dispatch(SendMessage({ 
  //       conversation_id: conversation_id, // Replace with the actual conversation_id
  //       message: message 
  //     }));
  //   }
  // };
  
  const handleSendMessage = () => {
  const conversation_id = localStorage.getItem('conversation_id'); // Retrieve from localStorage

  if (message.trim() && conversation_id) {
    const newMessage = {
      message: message,
      timestamp: Date.now(),
      user: name,
    };

    // Update the local messages state with the new message
    setMessages([...messages, newMessage]);
    setMessage(''); // Clear the input field after sending the message

    // Dispatch the SendMessage action with the correct arguments
    dispatch(SendMessage({ 
      conversation_id: conversation_id, // Use the conversation_id from localStorage
      message: message 
    }));
  }
};

  

  const filteredChatList = chatList.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      <Box
        sx={{
          width: '27%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'white',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Box sx={{ padding: 2, display: 'flex', alignItems: 'center', borderBottom: '1px solid #eee' }}>
          <img src={userAvatar} alt='my_image' style={{width:'80px', height:'70px'}} />
          <Box sx={{ marginLeft: 'auto' }}>
            <GroupOutlinedIcon />
            <QuestionAnswerOutlinedIcon sx={{ marginLeft: 1 }} />
            <PlaylistAddCheckOutlinedIcon sx={{ marginLeft: 1 }} />
            <MoreVertOutlinedIcon sx={{ marginLeft: 1 }} />
          </Box>
        </Box>
        <Box sx={{ padding: 2, borderBottom: '1px solid #eee' }}>
          <FormControl fullWidth>
            <InputLabel htmlFor="search-bar" sx={{
              position: 'absolute',
              left: '14%',
              transform: 'translateX(-50%)',
              top: '50%',
              transform: 'translateY(-50%)',
              pointerEvents: 'none',
            }}>Search</InputLabel>
            <TextField
              size="small"
              variant="outlined"
              value={searchQuery}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment
                    position="end"
                    style={{ display: showClearIcon }}
                    onClick={handleClick}
                  >
                    <ClearIcon />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
        </Box>
        <Box sx={{ overflowY: 'auto' }}>
          {filteredChatList.map((contact, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: 2,
                borderBottom: '1px solid #eee',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: '#f9f9f9',
                },
              }}
              onClick={() => handleChatClick(contact.name)}
            >
              <Avatar src={contact.profile_url} />
              <Box sx={{ marginLeft: 2 }}>
                <Typography variant="subtitle1">{contact.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Good morning, did you sleep well?
                </Typography>
              </Box>
              <Typography variant="body2" color="textSecondary" sx={{ marginLeft: 'auto' }}>
                Today
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ width: '70%', display: 'flex', flexDirection: 'column', backgroundColor: '#fff' }}>
        <Box sx={{ padding: 2, display: 'flex', alignItems: 'center', borderBottom: '1px solid #eee' }}>
          <Avatar src={userAvatar} />
          <Typography variant="h6" sx={{ marginLeft: 2 }}>{name}</Typography>
        </Box>
        <Box sx={{ flex: 1, padding: 2, overflowY: 'auto' }}>
          {/* <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {messages.map((msg, index) => (
              <Box key={index} sx={{ display: 'flex', marginBottom: 2, justifyContent: 'flex-start' }}>
                <Typography variant="body1" sx={{ marginRight: 2 }}>{msg.message}</Typography>
                <Typography variant="body2" color="textSecondary">{new Date(msg.timestamp).toLocaleString()}</Typography>
              </Box>
            ))}
          </Box> */}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
  {messages.map((msg, index) => (
    <Box 
      key={index} 
      sx={{ 
        display: 'flex', 
        marginBottom: 2, 
        justifyContent: msg.user === name ? 'flex-end' : 'flex-start' // Align based on sender
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
