import { Box, Container, Typography, Avatar, FormControl, InputAdornment, TextField, InputLabel, Drawer, IconButton, AppBar, Toolbar } from '@mui/material';
import { useNavigate } from "react-router-dom";
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import backimage from '../assets/backimage.png';
import over from '../assets/over.png';
import userAvatar from '../assets/Avatar.png';
import johnAvatar from '../assets/John.png';
import gohsAvatar from '../assets/Gohs.png';
import justinAvatar from '../assets/Justin.png';
import UserProfile from './UserProfile';
import ContactsPage from './ContactsPage';
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllChats } from '../features/auth/authSlice';

const AllChats = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const chatList = useSelector((state) => state.auth.chatList);
  const users = useSelector((state) => state.auth.users);
  const status = useSelector((state) => state.auth.status);
  const error = useSelector((state) => state.auth.error);
  const [showClearIcon, setShowClearIcon] = useState("none");
  const [searchQuery, setSearchQuery] = useState("");
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isContactsOpen, setIsContactsOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const navigate = useNavigate();



  useEffect(() => {
    if (token) {
      console.log('Dispatching GetAllChats with token:', token);
      dispatch(GetAllChats({ token }));
    }
  }, [dispatch, token]);
  
  useEffect(() => {
    console.log("Chat List:", chatList);
  }, [chatList]);
  
  // useEffect(() => {
  //   // const storedChats = localStorage.getItem('AllChats');
  //   // console.log('Chats in localStorage:', storedChats);
  // }, []);


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
 
  
  const handleUser = () => {
    setIsProfileOpen(true);
  };

  const handleContact = () => {
    setIsContactsOpen(true);
  };

  const handleProfileClose = () => {
    setIsProfileOpen(false);
  };

  const handleContactsClose = () => {
    setIsContactsOpen(false);
  };

    const filteredNames = users.filter(name =>
    users.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // const localChats = JSON.parse(localStorage.getItem('AllChats'))

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
      {/* Left Sidebar */}
      <Box
        sx={{
          width: '27%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'white',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Header */}
        <Box sx={{ padding: 2, display: 'flex', alignItems: 'center', borderBottom: '1px solid #eee' }}>
          <img src={userAvatar} alt='my_image' style={{ width: '80px', height: '70px' }} onClick={handleUser} />
          <Box sx={{ marginLeft: 'auto' }}>
            <GroupOutlinedIcon onClick={handleContact}/>
            <QuestionAnswerOutlinedIcon sx={{ marginLeft: 1 }} />
            <PlaylistAddCheckOutlinedIcon sx={{ marginLeft: 1 }} />
            <MoreVertOutlinedIcon sx={{ marginLeft: 1 }} />
          </Box>
        </Box>

        {/* Search Bar */}
        <Box sx={{ padding: 2, borderBottom: '1px solid #eee' }}>
          {/* {console.log(user[0].participants[0].name)} */}
          <FormControl fullWidth>
            <InputLabel htmlFor="search-bar" sx={{
            position: 'absolute',
            left: '14%',
            transform: 'translateX(-50%)',
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none'}}>
              Search</InputLabel>
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

        {/* Chat List */}
        <Box sx={{ overflowY: 'auto' }}>
          {filteredNames.map((user, index) => (
            <Box
              key={user._id}
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
              onClick={() => handleChatClick(user[index]?.participants[0]?.name)}
            >
              <Avatar src={user.profile_url} />
              <Box sx={{ marginLeft: 2 }}>
                <Typography variant="subtitle1">{user[index]?.participants[0]?.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                   {user[index]?.participants[0]?.lastMessage}
                
                </Typography>
              </Box>
              <Typography variant="body2" color="textSecondary" sx={{ marginLeft: 'auto' }}>
                Today
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Main Content Area */}
      <Box
        sx={{
          width: '70%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <img src={backimage} alt="Background" style={{ width: '100%', height: '100vh' }} />
        <img src={over} alt="Centered" style={{ position: 'absolute', width: '60%', height: 'auto' }} />
      </Box>

      {/* Profile Drawer */}
      <Drawer
        anchor="left"
        open={isProfileOpen}
        onClose={handleProfileClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{ width: '27%', '& .MuiDrawer-paper': { width: '27%' } }}
      >
        <UserProfile onClose={handleProfileClose} />
      </Drawer>

      {/* Contacts Drawer */}
      <Drawer
        anchor="left"
        open={isContactsOpen}
        onClose={handleContactsClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{ width: '27%', '& .MuiDrawer-paper': { width: '27%' } }}
      >
        <ContactsPage />
      </Drawer>
    </Container>
  );
};

export default AllChats;
