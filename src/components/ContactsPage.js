
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Snackbar, Toolbar, IconButton, Typography, TextField, List, ListItem, ListItemAvatar, ListItemText, Avatar, Container, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Add, Search, ChatBubbleOutline, MoreVert } from '@mui/icons-material';
import { GetUsers, SetparticipantId, addToChatList, SendReceiverId } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth.users);
  const status = useSelector((state) => state.auth.status);
  const error = useSelector((state) => state.auth.error);
  const token = useSelector((state) => state.auth.token);
  const [participantId, setParticipantId] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(GetUsers());
  }, [dispatch]);

  const handleChatClick = async (contact) => {
    try {
      setParticipantId(contact._id); // Update the participantId state
      dispatch(addToChatList(contact));
      
      const action = await dispatch(SendReceiverId({ token: localStorage.getItem('token'), participantId }));

      if (SendReceiverId.fulfilled.match(action)) {
        if (action.payload) {
          alert("I am here");
          dispatch(SetparticipantId(contact._id));
          navigate(`/personal-chat/${contact.name}`);
        } else {
          setSnackbarMessage(action.payload?.message || 'Phone number is not available');
          setOpenSnackbar(true);
        }
      } else {
        setSnackbarMessage(error?.message || 'An error occurred');
        setOpenSnackbar(true);
      }
    } catch (err) {
      setSnackbarMessage('An unexpected error occurred');
      setOpenSnackbar(true);
    }
  };

  const ContactItem = ({ contact }) => (
    <ListItem onClick={() => handleChatClick(contact)}>
      <ListItemAvatar>
        <Avatar src={contact.profile_url} />
      </ListItemAvatar>
      <ListItemText primary={contact.name} secondary={contact.status} />
    </ListItem>
  );

  return (
    <Container>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Contacts
          </Typography>
          <IconButton color="primary">
            <Add />
          </IconButton>
        </Toolbar>
      </AppBar>
      <TextField
        variant="outlined"
        placeholder="Search"
        fullWidth
        margin="normal"
        InputProps={{
          startAdornment: (
            <IconButton position="start">
              <Search />
            </IconButton>
          ),
        }}
      />
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error?.message}</p>}
      {Array.isArray(users) && users.length > 0 && (
        <List>
          {users.map((user) => (
            <ContactItem key={user._id} contact={user} />
          ))}
        </List>
      )}
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Contacts" icon={<ChatBubbleOutline />} />
        <BottomNavigationAction label="Search" icon={<Search />} />
        <BottomNavigationAction label="More" icon={<MoreVert />} />
      </BottomNavigation>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        message={snackbarMessage}
      />
    </Container>
  );
};

export default ContactsPage;
