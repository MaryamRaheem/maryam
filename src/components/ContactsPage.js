// // import React, { useState, useEffect } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import {
// //   AppBar,
// //   Snackbar,
// //   Toolbar,
// //   IconButton,
// //   Typography,
// //   TextField,
// //   List,
// //   ListItem,
// //   ListItemAvatar,
// //   ListItemText,
// //   Avatar,
// //   Container,
// //   BottomNavigation,
// //   BottomNavigationAction,
// // } from "@mui/material";
// // import { Add, Search, ChatBubbleOutline, MoreVert } from "@mui/icons-material";
// // import {
// //   GetUsers,
// //   SetparticipantId,
// //   addToChatList,
// //   SendReceiverId,
// // } from "../features/auth/authSlice";
// // // import {SendReceiverId,GetUsers} from '../features/auth/actions';
// // import { useNavigate } from "react-router-dom";

// // const ContactsPage = () => {
// //   const dispatch = useDispatch();
// //   const users = useSelector((state) => state.auth.users);
// //   const status = useSelector((state) => state.auth.status);
// //   const error = useSelector((state) => state.auth.error);
// //   const token = useSelector((state) => state.auth.token);
// //   const [openSnackbar, setOpenSnackbar] = useState(false);
// //   const [snackbarMessage, setSnackbarMessage] = useState("");

// //   const participantId = useSelector((state) => state.auth.participantId);

// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     dispatch(GetUsers());
// //   }, [dispatch]);

// //   const handleChatClick = async (contact) => {
// //     try {
// //       // setParticipantId(contact._id);
// //       // // dispatch(addToChatList(contact));
// //       localStorage.setItem("participantId", contact._id);
// //       // localStorage.setItem('conversation_id', state.conversation_id);
// //       // participantId
// //       const participantId = localStorage.getItem("participantId");

// //       const action = await dispatch(
// //         SendReceiverId({ token: localStorage.getItem("token"), participantId })
// //       );
// //       if (SendReceiverId.fulfilled.match(action)) {
// //         if (action.payload) {
// //           alert("I am here");
// //           // dispatch(SetparticipantId(contact._id));
// //           navigate(`/personal-chat/${contact.name}`);
// //         } else {
// //           setSnackbarMessage(
// //             action.payload?.message || "Phone number is not available"
// //           );
// //           setOpenSnackbar(true);
// //         }
// //       } else {
// //         setSnackbarMessage(error?.message || "An error occurred");
// //         setOpenSnackbar(true);
// //       }
// //     } catch (err) {
// //       setSnackbarMessage("An unexpected error occurred");
// //       setOpenSnackbar(true);
// //     }
// //   };

// //   const ContactItem = ({ contact }) => (
// //     <ListItem onClick={() => handleChatClick(contact)}>
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
// //       {status === "loading" && <p>Loading...</p>}
// //       {status === "failed" && <p>Error: {error?.message}</p>}
// //       {Array.isArray(users) && users.length > 0 && (
// //         <List>
// //           {users.map((user) => (
// //             <ContactItem key={user._id} contact={user} />
// //           ))}
// //         </List>
// //       )}
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

// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   AppBar,
//   Snackbar,
//   Toolbar,
//   IconButton,
//   Typography,
//   TextField,
//   List,
//   ListItem,
//   ListItemAvatar,
//   ListItemText,
//   Avatar,
//   Container,
//   BottomNavigation,
//   BottomNavigationAction,
// } from "@mui/material";
// import { Add, Search, ChatBubbleOutline, MoreVert } from "@mui/icons-material";
// import { GetUsers, SendReceiverId } from "../features/auth/authSlice";
// // import {SendReceiverId,GetUsers} from '../features/auth/actions';
// import { useNavigate } from "react-router-dom";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// const ContactsPage = () => {
//   const dispatch = useDispatch();
//   const users = useSelector((state) => state.auth.users);
//   const status = useSelector((state) => state.auth.status);
//   const error = useSelector((state) => state.auth.error);
//   const token = useSelector((state) => state.auth.token);
//   const [openSnackbar, setOpenSnackbar] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState("");
//   const [searchQuery, setSearchQuery] = useState(""); // Add search query state

//   const participantId = useSelector((state) => state.auth.participantId);

//   const navigate = useNavigate();

//   useEffect(() => {
//     dispatch(GetUsers());
//   }, [dispatch]);

//   const handleChatClick = async (contact) => {
//     try {
//       localStorage.setItem("participantId", contact._id);
//       const participantId = localStorage.getItem("participantId");

//       const action = await dispatch(
//         SendReceiverId({ token: localStorage.getItem("token"), participantId })
//       );
//       if (SendReceiverId.fulfilled.match(action)) {
//         if (action.payload) {
//           navigate(`/personal-chat/${contact.name}`);
//         } else {
//           setSnackbarMessage(
//             action.payload?.message || "Phone number is not available"
//           );
//           setOpenSnackbar(true);
//         }
//       } else {
//         setSnackbarMessage(error?.message || "An error occurred");
//         setOpenSnackbar(true);
//       }
//     } catch (err) {
//       setSnackbarMessage("An unexpected error occurred");
//       setOpenSnackbar(true);
//     }
//   };

//   // Filter users based on the search query
//   const filteredUsers = users.filter((user) =>
//     user.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

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
//           <ArrowBackIcon sx={{ marginRight: 4 }} />
//           <Typography variant="h6" style={{ flexGrow: 1, marginLeft: 15 }}>
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
//         value={searchQuery} // Bind input value to searchQuery state
//         onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on input change
//         InputProps={{
//           startAdornment: (
//             <IconButton position="start">
//               <Search />
//             </IconButton>
//           ),
//         }}
//       />
//       {status === "loading" && <p>Loading...</p>}
//       {status === "failed" && <p>Error: {error?.message}</p>}
//       {Array.isArray(filteredUsers) && filteredUsers.length > 0 && (
//         <List>
//           {filteredUsers.map((user) => (
//             <ContactItem key={user._id} contact={user} />
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
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AppBar,
  Snackbar,
  Toolbar,
  IconButton,
  Typography,
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Container,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import { Add, Search, ChatBubbleOutline, MoreVert } from "@mui/icons-material";
import { GetUsers, SendReceiverId } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth.users);
  const status = useSelector((state) => state.auth.status);
  const error = useSelector((state) => state.auth.error);
  const token = useSelector((state) => state.auth.token);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // Add search query state

  const participantId = useSelector((state) => state.auth.participantId);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(GetUsers());
  }, [dispatch]);

  const handleChatClick = async (contact) => {
    try {
      localStorage.setItem("participantId", contact._id);
      const participantId = localStorage.getItem("participantId");

      const action = await dispatch(
        SendReceiverId({ token: localStorage.getItem("token"), participantId })
      );
      if (SendReceiverId.fulfilled.match(action)) {
        if (action.payload) {
          navigate(`/personal-chat/${contact.name}`);
        } else {
          setSnackbarMessage(
            action.payload?.message || "Phone number is not available"
          );
          setOpenSnackbar(true);
        }
      } else {
        setSnackbarMessage(error?.message || "An error occurred");
        setOpenSnackbar(true);
      }
    } catch (err) {
      setSnackbarMessage("An unexpected error occurred");
      setOpenSnackbar(true);
    }
  };

  // Filter users based on the search query
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const ContactItem = ({ contact }) => (
    <ListItem onClick={() => handleChatClick(contact)}>
      <ListItemAvatar>
        <Avatar src={contact.profile_url} />
      </ListItemAvatar>
      <ListItemText primary={contact.name} secondary={contact.status} />
    </ListItem>
  );

  const handleBackClick = () => {
    navigate(0); // Navigate back to the previous page
  };

  return (
    <Container>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton onClick={handleBackClick}>
            <ArrowBackIcon sx={{ marginRight: 4 }} />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1, marginLeft: 15 }}>
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
        value={searchQuery} // Bind input value to searchQuery state
        onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on input change
        InputProps={{
          startAdornment: (
            <IconButton position="start">
              <Search />
            </IconButton>
          ),
        }}
      />
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error?.message}</p>}
      {Array.isArray(filteredUsers) && filteredUsers.length > 0 && (
        <List>
          {filteredUsers.map((user) => (
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
