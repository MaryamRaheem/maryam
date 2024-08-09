import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from './components/ProfileAccount'; 
import RoleSelect from './components/RoleSelect';
import Register from './components/Register';
import AllChats from './components/AllChats';
import PasswordAuthenticate from './components/PasswordAuthenticate';
import PersonalChat from './components/PersonalChat';
import UserProfile from './components/UserProfile';
import ContactsPage from './components/ContactsPage';
import HomePage from './components/HomePage';

function App() {
  return (
    <div>
    <Router>
    <Routes>
    <Route path="/" element={<HomePage/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/profile" element={<Profile/>} />
    <Route path="/RoleSelect" element={<RoleSelect/>} />
    <Route path="/Login" element={<Login/>} />
    <Route path="/AllChats" element={<AllChats/>} />
    <Route path="/PasswordAuthenticate" element={<PasswordAuthenticate/>} />
    <Route path="/personal-chat/:name" element={<PersonalChat />} />
    <Route path="/UserProfile" element={<UserProfile/>} />
    <Route path="/ContactsPage" element={<ContactsPage/>} />

    </Routes>
  </Router>
  </div>
  );
}

export default App;
