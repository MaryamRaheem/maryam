// // // import React, { useState,useEffect } from 'react';
// // // import { useDispatch, useSelector } from 'react-redux';
// // // import { AppBar, Toolbar, IconButton, Typography, TextField, List, ListItem, ListItemAvatar, ListItemText, Avatar, Container, BottomNavigation, BottomNavigationAction } from '@mui/material';
// // // import { Add, Search, ChatBubbleOutline, MoreVert } from '@mui/icons-material';
// // // import { GetUsers,setparticipantId, addToChatList, SendReceiverId } from '../features/auth/authSlice'; // Import the action
// // // import { useNavigate } from 'react-router-dom';



// // // const ContactsPage = () => {
// // //   const dispatch = useDispatch();
// // //   const users = useSelector((state) => state.auth.users);
// // //   const status = useSelector((state) => state.auth.status);
// // //   const error = useSelector((state) => state.auth.error);
// // //   const [receiver_id, setReceiverId] = useState('');
// // //   const [openSnackbar, setOpenSnackbar] = useState(false);
// // //   const [snackbarMessage, setSnackbarMessage] = useState('');
  
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     dispatch(GetUsers());
// // //   }, [dispatch]);



// // //   const  handleChatClick = async () => {
// // //     try {
// // //       dispatch(addToChatList(contact,key));
// // //       const action = await dispatch(SendReceiverId(key));
// // //       if (SendReceiverId.fulfilled.match(action)) {
// // //          console.log(action.payload)
// // //         if (action.payload) {
// // //           alert("i am here")
// // //           setReceiverId(contact.index);
// // //           dispatch(setparticipantId(receiver_id));
// // //           navigate(`/personal-chat/${contact.name}`);
// // //         } else {
// // //           setSnackbarMessage(action.payload.message || 'Phone number is not available');
// // //           setOpenSnackbar(true);
// // //         }
// // //       } else {
// // //         setSnackbarMessage(error.message || 'An error occurred');
// // //         setOpenSnackbar(true);
// // //       }
// // //     } catch (err) {
// // //       setSnackbarMessage('An unexpected error occurred');
// // //       setOpenSnackbar(true);
// // //     }
// // //   };

// // //   const ContactItem = ({ contact,key }) => (
// // //     <ListItem onClick={() => handleChatClick(contact,key)}> {/* Move onClick here */}
// // //       <ListItemAvatar>
// // //         <Avatar src={contact.profile_url} />
// // //       </ListItemAvatar>
// // //       <ListItemText primary={contact.name} secondary={contact.status} />
// // //     </ListItem>
// // //   );

// // //   return (
// // //     <Container>
// // //       <AppBar position="static" color="transparent" elevation={0}>
// // //         <Toolbar>
// // //           <Typography variant="h6" style={{ flexGrow: 1 }}>
// // //             Contacts
// // //           </Typography>
// // //           <IconButton color="primary">
// // //             <Add />
// // //           </IconButton>
// // //         </Toolbar>
// // //       </AppBar>
// // //       <TextField
// // //         variant="outlined"
// // //         placeholder="Search"
// // //         fullWidth
// // //         margin="normal"
// // //         InputProps={{
// // //           startAdornment: (
// // //             <IconButton position="start">
// // //               <Search />
// // //             </IconButton>
// // //           ),
// // //         }}
// // //       />
// // //       {status === 'loading' && <p>Loading...</p>}
// // //       {status === 'failed' && <p>Error: {error}</p>}
// // //       <List>
// // //         {users.map((user, index) => (
// // //           <ContactItem key={index} contact={user} />
// // //         ))}
// // //       </List>
// // //       <BottomNavigation showLabels>
// // //         <BottomNavigationAction label="Contacts" icon={<ChatBubbleOutline />} />
// // //         <BottomNavigationAction label="Search" icon={<Search />} />
// // //         <BottomNavigationAction label="More" icon={<MoreVert />} />
// // //       </BottomNavigation>
// // //     </Container>
// // //   );
// // // };

// // // export default ContactsPage;

// // import React, { useState, useEffect } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { AppBar, Toolbar, IconButton, Typography, TextField, List, ListItem, ListItemAvatar, ListItemText, Avatar, Container, BottomNavigation, BottomNavigationAction } from '@mui/material';
// // import { Add, Search, ChatBubbleOutline, MoreVert } from '@mui/icons-material';
// // import { GetUsers, setparticipantId, addToChatList, SendReceiverId } from '../features/auth/authSlice'; // Import the action
// // import { useNavigate } from 'react-router-dom';

// // const ContactsPage = () => {
// //   const dispatch = useDispatch();
// //   const users = useSelector((state) => state.auth.users);
// //   const status = useSelector((state) => state.auth.status);
// //   const error = useSelector((state) => state.auth.error);
// //   const [receiver_id, setReceiverId] = useState('');
// //   const [openSnackbar, setOpenSnackbar] = useState(false);
// //   const [snackbarMessage, setSnackbarMessage] = useState('');
  
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     dispatch(GetUsers());
// //   }, [dispatch]);

// //   // const handleChatClick = async (contact, key) => {
// //   //   try {
// //   //     dispatch(addToChatList(contact, key));
// //   //     const action = await dispatch(SendReceiverId(key));
// //   //     if (SendReceiverId.fulfilled.match(action)) {
// //   //       console.log(action.payload)
// //   //       if (action.payload) {
// //   //         alert("i am here");
// //   //         setReceiverId(key);
// //   //         dispatch(setparticipantId(receiver_id));
// //   //         navigate(`/personal-chat/${contact.name}`);
// //   //       } else {
// //   //         setSnackbarMessage(action.payload.message || 'Phone number is not available');
// //   //         setOpenSnackbar(true);
// //   //       }
// //   //     } else {
// //   //       setSnackbarMessage(error.message || 'An error occurred');
// //   //       setOpenSnackbar(true);
// //   //     }
// //   //   } catch (err) {
// //   //     setSnackbarMessage('An unexpected error occurred');
// //   //     setOpenSnackbar(true);
// //   //   }
// //   // };
// //   const handleChatClick = async (contact, key) => {
// //     try {
// //       dispatch(addToChatList(contact, key));
// //       const action = await dispatch(SendReceiverId(key));
// //       if (SendReceiverId.fulfilled.match(action)) {
// //         if (action.payload) {
// //           alert("I am here");
// //           setReceiverId(key);
// //           dispatch(setparticipantId(receiver_id));
// //           navigate(`/personal-chat/${contact.name}`);
// //         } else {
// //           setSnackbarMessage(action.payload.message || 'Phone number is not available');
// //           setOpenSnackbar(true);
// //         }
// //       } else {
// //         setSnackbarMessage(String(error.message || 'An error occurred'));
// //         setOpenSnackbar(true);
// //       }
// //     } catch (err) {
// //       setSnackbarMessage('An unexpected error occurred');
// //       setOpenSnackbar(true);
// //     }
// //   };
  
// //   // Snackbar component to show messages
// //   <Snackbar
// //     open={openSnackbar}
// //     autoHideDuration={6000}
// //     onClose={() => setOpenSnackbar(false)}
// //     message={snackbarMessage}
// //   />

// //   // const ContactItem = ({ contact, key }) => (
// //   //   <ListItem onClick={() => handleChatClick(contact, key)}>
// //   //     <ListItemAvatar>
// //   //       <Avatar src={contact.profile_url} />
// //   //     </ListItemAvatar>
// //   //     <ListItemText primary={contact.name} secondary={contact.status} />
// //   //   </ListItem>
// //   // );

// //   return (
// //     <Container>
// //       <AppBar position="static" color="transparent" elevation={0}>
// //         <Toolbar>
// //           <Typography variant="h6" style={{ flexGrow: 1 }}>
// //             Contacts
// //           </Typography>
// //           <IconButton color="primary">
// //             <Add />
// //           </IconButton>
// //         </Toolbar>
// //       </AppBar>
// //       <TextField
// //         variant="outlined"
// //         placeholder="Search"
// //         fullWidth
// //         margin="normal"
// //         InputProps={{
// //           startAdornment: (
// //             <IconButton position="start">
// //               <Search />
// //             </IconButton>
// //           ),
// //         }}
// //       />
// //       {status === 'loading' && <p>Loading...</p>}
// //       {status === 'failed' && <p>Error: {error}</p>}
// //       <List>
// //         {users.map((user, index) => (
// //           <ContactItem key={index} contact={user} />
// //         ))}
// //       </List>
// //       <BottomNavigation showLabels>
// //         <BottomNavigationAction label="Contacts" icon={<ChatBubbleOutline />} />
// //         <BottomNavigationAction label="Search" icon={<Search />} />
// //         <BottomNavigationAction label="More" icon={<MoreVert />} />
// //       </BottomNavigation>
// //     </Container>
// //   );
// // };

// // export default ContactsPage;

// // import React, { useState, useEffect } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { AppBar, Snackbar, Toolbar, IconButton, Typography, TextField, List, ListItem, ListItemAvatar, ListItemText, Avatar, Container, BottomNavigation, BottomNavigationAction } from '@mui/material';
// // import { Add, Search, ChatBubbleOutline, MoreVert } from '@mui/icons-material';
// // import { GetUsers, SetparticipantId, addToChatList, SendReceiverId } from '../features/auth/authSlice';
// // import { useNavigate } from 'react-router-dom';


// // const ContactsPage = () => {
// //   const dispatch = useDispatch();
// //   const users = useSelector((state) => state.auth.users);
// //   const status = useSelector((state) => state.auth.status);
// //   const token = useSelector((state) => state.auth.token); // Get phone_number from state

// //   const error = useSelector((state) => state.auth.error);
// //   const [participantId, setparticipantId] = useState('');
// //   const [openSnackbar, setOpenSnackbar] = useState(false);
// //   const [snackbarMessage, setSnackbarMessage] = useState('');

// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     dispatch(GetUsers());
// //   }, [dispatch]);

// //   const handleChatClick = async (contact, key) => {
// //     try {
// //         dispatch(addToChatList(contact, key));
// //       console.log(contact.id);
// //       const action = await dispatch(SendReceiverId({ token: localStorage.getItem('token'), participantId }));
// //       if (SendReceiverId.fulfilled.match(action)) {
// //         if (action.payload) {
// //           alert("I am here");
// //           dispatch(SetparticipantId(participantId));
// //           console.log(participantId);
// //           navigate(`/personal-chat/${contact.name}`);
// //         } else {
// //           setSnackbarMessage(action.payload.message || 'Phone number is not available');
// //           setOpenSnackbar(true);
// //         }
// //       } else {
// //         setSnackbarMessage(String(error.message || 'An error occurred'));
// //         setOpenSnackbar(true);
// //       }
// //     } catch (err) {
// //       setSnackbarMessage('An unexpected error occurred');
// //       setOpenSnackbar(true);
// //     }
// //   };

// //   const ContactItem = ({ contact }) => (
// //     <ListItem onClick={() => handleChatClick(contact, contact.id)}>
// //       <ListItemAvatar>
// //         <Avatar src={contact.profile_url} />
// //       </ListItemAvatar>
// //       <ListItemText primary={contact.name} secondary={contact.status} />
// //     </ListItem>
// //   );

// //   return (
// //     <Container>
// //       <AppBar position="static" color="transparent" elevation={0}>
// //         <Toolbar>
// //           <Typography variant="h6" style={{ flexGrow: 1 }}>
// //             Contacts
// //           </Typography>
// //           <IconButton color="primary">
// //             <Add />
// //           </IconButton>
// //         </Toolbar>
// //       </AppBar>
// //       <TextField
// //         variant="outlined"
// //         placeholder="Search"
// //         fullWidth
// //         margin="normal"
// //         InputProps={{
// //           startAdornment: (
// //             <IconButton position="start">
// //               <Search />
// //             </IconButton>
// //           ),
// //         }}
// //       />
// //       {status === 'loading' && <p>Loading...</p>}
// //       {status === 'failed' && <p>Error: {error.message}</p>}
// //       <List>
// //         {users.map((user) => (
// //           <ContactItem key={user.id} contact={user} />
// //         ))}
// //       </List>
// //       <BottomNavigation showLabels>
// //         <BottomNavigationAction label="Contacts" icon={<ChatBubbleOutline />} />
// //         <BottomNavigationAction label="Search" icon={<Search />} />
// //         <BottomNavigationAction label="More" icon={<MoreVert />} />
// //       </BottomNavigation>
// //       <Snackbar
// //         open={openSnackbar}
// //         autoHideDuration={6000}
// //         onClose={() => setOpenSnackbar(false)}
// //         message={snackbarMessage}
// //       />
// //     </Container>
// //   );
// // };

// // export default ContactsPage;

// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { AppBar, Snackbar, Toolbar, IconButton, Typography, TextField, List, ListItem, ListItemAvatar, ListItemText, Avatar, Container, BottomNavigation, BottomNavigationAction } from '@mui/material';
// import { Add, Search, ChatBubbleOutline, MoreVert } from '@mui/icons-material';
// import { GetUsers, SetparticipantId, addToChatList, SendReceiverId } from '../features/auth/authSlice';
// import { useNavigate } from 'react-router-dom';

// const ContactsPage = () => {
//   const dispatch = useDispatch();
//   const users = useSelector((state) => state.auth.users);
//   const status = useSelector((state) => state.auth.status);
//   const error = useSelector((state) => state.auth.error);
//   const token = useSelector((state) => state.auth.token); // Get token from state if available

//   const [openSnackbar, setOpenSnackbar] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState('');

//   const navigate = useNavigate();

//   useEffect(() => {
//     dispatch(GetUsers());
//   }, [dispatch]);

//   const handleChatClick = async (contact) => {
//     try {
//       dispatch(addToChatList(contact));
//       const action = await dispatch(SendReceiverId({ token: localStorage.getItem('token'), participantId: contact.id }));

//       if (SendReceiverId.fulfilled.match(action)) {
//         if (action.payload) {
//           alert("I am here");
//           dispatch(SetparticipantId(contact.id)); // Set participant ID correctly
//           navigate(`/personal-chat/${contact.name}`);
//         } else {
//           setSnackbarMessage(action.payload.message || 'Phone number is not available');
//           setOpenSnackbar(true);
//         }
//       } else {
//         setSnackbarMessage(String(error.message || 'An error occurred'));
//         setOpenSnackbar(true);
//       }
//     } catch (err) {
//       setSnackbarMessage('An unexpected error occurred');
//       setOpenSnackbar(true);
//     }
//   };

//   const ContactItem = ({ contact }) => (
//     <ListItem onClick={() => handleChatClick(contact)}>
//       <ListItemAvatar>
//         <Avatar src={contact.profile_url} />
//       </ListItemAvatar>
//       <ListItemText primary={contact.name} secondary={contact.status} />
//     </ListItem>
//   );

//   return (
//     <Container>
//       <AppBar position="static" color="transparent" elevation={0}>
//         <Toolbar>
//           <Typography variant="h6" style={{ flexGrow: 1 }}>
//             Contacts
//           </Typography>
//           <IconButton color="primary">
//             <Add />
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <TextField
//         variant="outlined"
//         placeholder="Search"
//         fullWidth
//         margin="normal"
//         InputProps={{
//           startAdornment: (
//             <IconButton position="start">
//               <Search />
//             </IconButton>
//           ),
//         }}
//       />
//       {status === 'loading' && <p>Loading...</p>}
//       {status === 'failed' && <p>Error: {error.message}</p>}
//       <List>
//         {users.map((user) => (
//           <ContactItem key={user.id} contact={user} />
//         ))}
//       </List>
//       <BottomNavigation showLabels>
//         <BottomNavigationAction label="Contacts" icon={<ChatBubbleOutline />} />
//         <BottomNavigationAction label="Search" icon={<Search />} />
//         <BottomNavigationAction label="More" icon={<MoreVert />} />
//       </BottomNavigation>
//       <Snackbar
//         open={openSnackbar}
//         autoHideDuration={6000}
//         onClose={() => setOpenSnackbar(false)}
//         message={snackbarMessage}
//       />
//     </Container>
//   );
// };

// export default ContactsPage;

// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { AppBar, Snackbar, Toolbar, IconButton, Typography, TextField, List, ListItem, ListItemAvatar, ListItemText, Avatar, Container, BottomNavigation, BottomNavigationAction } from '@mui/material';
// import { Add, Search, ChatBubbleOutline, MoreVert } from '@mui/icons-material';
// import { GetUsers, SetparticipantId, addToChatList, SendReceiverId } from '../features/auth/authSlice';
// import { useNavigate } from 'react-router-dom';

// const ContactsPage = () => {
//   const dispatch = useDispatch();
//   const users = useSelector((state) => state.auth.users);
//   const status = useSelector((state) => state.auth.status);
//   const error = useSelector((state) => state.auth.error);
//   const token = useSelector((state) => state.auth.token);
//   const[participantId,setReceiverId] =useState('');
//   const [openSnackbar, setOpenSnackbar] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState('');

//   const navigate = useNavigate();

//   useEffect(() => {
//     dispatch(GetUsers());
//   }, [dispatch]);


//   const handleParticipant = (contact) => {
//   setReceiverId(contact.id);
//   console.log(participantId)
//   };

//   // const handleChatClick = async (contact) => {
//   //   try {
//   //     dispatch(addToChatList(contact));
//   //     const action = await dispatch(SendReceiverId({ token: localStorage.getItem('token'), participantId}));

//   //     if (SendReceiverId.fulfilled.match(action)) {
//   //       if (action.payload) {
//   //         alert("I am here");
//   //         dispatch(SetparticipantId(participantId));
//   //         navigate(`/personal-chat/${contact.name}`);
//   //       } else {
//   //         setSnackbarMessage(action.payload.message || 'Phone number is not available');
//   //         setOpenSnackbar(true);
//   //       }
//   //     } else {
//   //       setSnackbarMessage(String(error.message || 'An error occurred'));
//   //       setOpenSnackbar(true);
//   //     }
//   //   } catch (err) {
//   //     setSnackbarMessage('An unexpected error occurred');
//   //     setOpenSnackbar(true);
//   //   }
//   // };

//   const handleChatClick = async (contact) => {
//     try {
//       // setReceiverId(contact.id); // Update the participantId state
//       console.log("The contact id is"+contact.id);
//       dispatch(addToChatList(contact));
  
//       // Wait for the state to be updated before dispatching SendReceiverId
//       setTimeout(async () => {
//         const action = await dispatch(SendReceiverId({ token: localStorage.getItem('token'), participantId }));
  
//         if (SendReceiverId.fulfilled.match(action)) {
//           if (action.payload) {
//             alert("I am here");
//             dispatch(SetparticipantId(contact.id));
//             navigate(`/personal-chat/${contact.name}`);
//           } else {
//             setSnackbarMessage(action.payload.message || 'Phone number is not available');
//             setOpenSnackbar(true);
//           }
//         } else {
//           setSnackbarMessage(String(error.message || 'An error occurred'));
//           setOpenSnackbar(true);
//         }
//       }, 0);
//     } catch (err) {
//       setSnackbarMessage('An unexpected error occurred');
//       setOpenSnackbar(true);
//     }
//   };
 
//   const ContactItem = ({ contact }) => (
//     <ListItem onClick={() => handleChatClick(contact)}>
//       <ListItemAvatar>
//         <Avatar src={contact.profile_url} />
//       </ListItemAvatar>
//       <ListItemText primary={contact.name} secondary={contact.status} />
//     </ListItem>
//   );
//   return (
//     <Container>
//       <AppBar position="static" color="transparent" elevation={0}>
//         <Toolbar>
//           <Typography variant="h6" style={{ flexGrow: 1 }}>
//             Contacts
//           </Typography>
//           <IconButton color="primary">
//             <Add />
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <TextField
//         variant="outlined"
//         placeholder="Search"
//         fullWidth
//         margin="normal"
//         InputProps={{
//           startAdornment: (
//             <IconButton position="start">
//               <Search />
//             </IconButton>
//           ),
//         }}
//       />
//       {status === 'loading' && <p>Loading...</p>}
//       {status === 'failed' && <p>Error: {error.message}</p>}
//       {Array.isArray(users) && users.length > 0 && (
//         <List>
//           {users.map((user) => (
//             <ContactItem key={user.id} contact={user} />
//           ))}
//         </List>
//       )}
//       <BottomNavigation showLabels>
//         <BottomNavigationAction label="Contacts" icon={<ChatBubbleOutline />} />
//         <BottomNavigationAction label="Search" icon={<Search />} />
//         <BottomNavigationAction label="More" icon={<MoreVert />} />
//       </BottomNavigation>
//       <Snackbar
//         open={openSnackbar}
//         autoHideDuration={6000}
//         onClose={() => setOpenSnackbar(false)}
//         message={snackbarMessage}
//       />
//     </Container>
//   );
// };

// export default ContactsPage;

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
