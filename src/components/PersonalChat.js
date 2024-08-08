// import React, { useEffect, useState } from 'react';
// import { Box, Container, Typography, Avatar, FormControl, InputAdornment, TextField, InputLabel,IconButton } from '@mui/material';
// import { useParams } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
// import SendIcon from '@mui/icons-material/Send';
// import { io } from 'socket.io-client';
// import userAvatar from '../assets/Avatar.png';
// import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
// import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
// import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
// import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
// import SearchIcon from '@mui/icons-material/Search';
// import ClearIcon from '@mui/icons-material/Clear';

// import johnAvatar from '../assets/John.png';
// import gohsAvatar from '../assets/Gohs.png';
// import justinAvatar from '../assets/Justin.png';

// // const socket = io('http://192.168.80.49:4000'); // Connect to WebSocket server

// const PersonalChat = () => {
//   const avatarMap = {
//     John: johnAvatar,
//     Gohs: gohsAvatar,
//     Justin: justinAvatar,
//   };
//   const { name } = useParams();
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [showClearIcon, setShowClearIcon] = useState("none");
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();


//   // useEffect(() => {
//   //   // Listen for incoming messages
//   //   socket.on('receiveMessage', (message) => {
//   //     setMessages((prevMessages) => [...prevMessages, message]);
//   //   });

//   //   // Clean up the socket connection on component unmount
//   //   return () => {
//   //     socket.off('receiveMessage');
//   //   };
//   // }, []);

//   // const handleSendMessage = () => {
//   //   if (message.trim()) {
//   //     const newMessage = { text: message, user: name, timestamp: new Date().toLocaleTimeString() };
//   //     socket.emit('sendMessage', newMessage);
//   //     // setMessages((prevMessages) => [...prevMessages, newMessage]);
//   //     setMessage('');
//   //   }
//   // };
//   const handleChange = (event) => {
//     setSearchQuery(event.target.value);
//     setShowClearIcon(event.target.value === "" ? "none" : "flex");
//   };

//   const handleClick = () => {
//     setSearchQuery("");
//     setShowClearIcon("none");
//   };

//   const handleChatClick = (name) => {
//     navigate(`/personal-chat/${name}`); // Navigate to PersonalChat with the user name as a parameter
//   };

//   const filteredNames = ['John', 'Gohs', 'Justin', 'John', 'Justin'].filter(name =>
//     name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <Container
//       disableGutters
//       maxWidth={false}
//       sx={{ 
//         display: 'flex', 
//         width: '100%',
//         height: '100vh',
//         backgroundColor: '#f5f5f5'
//       }}
//     >
//       {/* Left Sidebar */}
//       <Box
//         sx={{
//           width: '27%',
//           display: 'flex',
//           flexDirection: 'column',
//           backgroundColor: 'white',
//           boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
//         }}
//       >
//         {/* Header */}
//         <Box sx={{ padding: 2, display: 'flex', alignItems: 'center', borderBottom: '1px solid #eee' }}>
//           <img src={userAvatar} alt='my_image' style={{width:'80px', height:'70px'}} />
//           <Box sx={{ marginLeft: 'auto' }}>
//             <GroupOutlinedIcon />
//             <QuestionAnswerOutlinedIcon sx={{ marginLeft: 1 }} />
//             <PlaylistAddCheckOutlinedIcon sx={{ marginLeft: 1 }} />
//             <MoreVertOutlinedIcon sx={{ marginLeft: 1 }} />
//           </Box>
//         </Box>

//         <Box sx={{ padding: 2, borderBottom: '1px solid #eee' }}>
//           <FormControl fullWidth>
//             <InputLabel htmlFor="search-bar"  sx={{
//     position: 'absolute',
//     left: '14%',
//     transform: 'translateX(-50%)',
//     top: '50%',

//     transform: 'translateY(-50%)',
//     pointerEvents: 'none',
//   }}>Search</InputLabel>
//             <TextField
//               size="small"
//               variant="outlined"
//               value={searchQuery}
//               onChange={handleChange}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <SearchIcon />
//                   </InputAdornment>
//                 ),
//                 endAdornment: (
//                   <InputAdornment
//                     position="end"
//                     style={{ display: showClearIcon }}
//                     onClick={handleClick}
//                   >
//                     <ClearIcon />
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </FormControl>
//         </Box>

//         {/* Chat List */}
//         {/* <Box sx={{ overflowY: 'auto' }}>
//           {['John', 'Gohs', 'Justin', 'John', 'Justin'].map((name, index) => (
//             <Box
//               key={index}
//               sx={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 padding: 2,
//                 borderBottom: '1px solid #eee',
//                 '&:hover': {
//                   backgroundColor: '#f9f9f9',
//                 },
//               }}
//             >
//               <Avatar src={userAvatar} />
//               <Box sx={{ marginLeft: 2 }}>
//                 <Typography variant="subtitle1">{name}</Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   Good morning, did you sleep well?
//                 </Typography>
//               </Box>
//               <Typography variant="body2" color="textSecondary" sx={{ marginLeft: 'auto' }}>
//                 Today
//               </Typography>
//             </Box>
//           ))}
//         </Box> */}

//       <Box sx={{ overflowY: 'auto' }}>
//           {filteredNames.map((name, index) => (
//             <Box
//               key={index}
//               sx={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 padding: 2,
//                 borderBottom: '1px solid #eee',
//                 cursor: 'pointer',
//                 '&:hover': {
//                   backgroundColor: '#f9f9f9',
//                 },
//               }}
//               onClick={() => handleChatClick(name)}
//             >
//               <Avatar src={avatarMap[name]} />
//               <Box sx={{ marginLeft: 2 }}>
//                 <Typography variant="subtitle1">{name}</Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   Good morning, did you sleep well?
//                 </Typography>
//               </Box>
//               <Typography variant="body2" color="textSecondary" sx={{ marginLeft: 'auto' }}>
//                 Today
//               </Typography>
//             </Box>
//           ))}
//         </Box>
       
//       </Box>

//       {/* Main Content Area */}
//       <Box
//         sx={{
//           width: '70%',
//           display: 'flex',
//           flexDirection: 'column',
//           backgroundColor: '#fff',
//         }}
//       >
//         {/* Header */}
//         <Box sx={{ padding: 2, display: 'flex', alignItems: 'center', borderBottom: '1px solid #eee' }}>
//           <Avatar src={userAvatar} />
//           <Typography variant="h6" sx={{ marginLeft: 2 }}>{name}</Typography>
//         </Box>

//         {/* Chat Messages */}
//         <Box sx={{ flex: 1, padding: 2, overflowY: 'auto' }}>
//           <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//             {messages.map((msg, index) => (
//               <Box key={index} sx={{ display: 'flex', marginBottom: 2, justifyContent: msg.user === name ? 'flex-end' : 'flex-start' }}>
//                 <Typography variant="body1" sx={{ marginRight: 2 }}>{msg.text}</Typography>
//                 <Typography variant="body2" color="textSecondary">{msg.timestamp}</Typography>
//               </Box>
//             ))}
//           </Box>
//         </Box>

//         {/* Input Field */}
//         <Box sx={{ padding: 2, borderTop: '1px solid #eee', display: 'flex', alignItems: 'center' }}>
//           <TextField
//             variant="outlined"
//             size="small"
//             fullWidth
//             placeholder="Type a message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//           />
//           {/* <IconButton color="primary" onClick={handleSendMessage}> */}
//           <IconButton color="primary">

//             <SendIcon />
//           </IconButton>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default PersonalChat;



// PersonalChat.js

import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Avatar, FormControl, InputAdornment, TextField, InputLabel, IconButton } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import { useSelector } from 'react-redux';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import userAvatar from '../assets/Avatar.png';
import johnAvatar from '../assets/John.png';
import gohsAvatar from '../assets/Gohs.png';
import justinAvatar from '../assets/Justin.png';

const avatarMap = {
  John: johnAvatar,
  Gohs: gohsAvatar,
  Justin: justinAvatar,
};

const PersonalChat = () => {
  const { name } = useParams();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [showClearIcon, setShowClearIcon] = useState("none");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const chatList = useSelector((state) => state.auth.chatList); // Get chatList from state

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
      <Box
        sx={{
          width: '70%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#fff',
        }}
      >
        <Box sx={{ padding: 2, display: 'flex', alignItems: 'center', borderBottom: '1px solid #eee' }}>
          <Avatar src={userAvatar} />
          <Typography variant="h6" sx={{ marginLeft: 2 }}>{name}</Typography>
        </Box>
        <Box sx={{ flex: 1, padding: 2, overflowY: 'auto' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {messages.map((msg, index) => (
              <Box key={index} sx={{ display: 'flex', marginBottom: 2, justifyContent: msg.user === name ? 'flex-end' : 'flex-start' }}>
                <Typography variant="body1" sx={{ marginRight: 2 }}>{msg.text}</Typography>
                <Typography variant="body2" color="textSecondary">{msg.timestamp}</Typography>
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
          <IconButton color="primary">
            <SendIcon />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};

export default PersonalChat;
