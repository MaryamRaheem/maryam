// // // import "./App.css";
// // // import AppRoutes from "./routes/routes";
// // // import { Provider } from "react-redux";
// // // import { PersistGate } from "redux-persist/integration/react";
// // // import { ToastContainer } from "react-toastify";
// // // import { persistor, store } from "./store";

// // // function App() {
// // //   return (
// // //     // <Provider store={store}>
// // //     //   {/* <PersistGate persistor={persistor}>
// // //     //     <ToastContainer />
// // //     //   </PersistGate> */}
// // //     // </Provider>
// // //     <Provider>
// // //       <AppRoutes />
// // //     </Provider>
// // //   );
// // // }

// // // export default App;

// // import "./App.css";
// // import AppRoutes from "./routes/routes";
// // import { Provider } from "react-redux";
// // import { PersistGate } from "redux-persist/integration/react";
// // import { ToastContainer } from "react-toastify";
// // import { persistor, store } from "./store";

// // function App() {
// //   return (
// //     <>
// //       {/* <ToastContainer /> */}
// //       <Provider>
// //         {/* <PersistGate persistor={persistor}> */}
// //         <AppRoutes />
// //         {/* </PersistGate> */}
// //       </Provider>
// //     </>
// //   );
// // }

// // export default App;

// // import "./App.css";
// // import AppRoutes from "./routes/routes";
// // import { Provider } from "react-redux";
// // import { PersistGate } from "redux-persist/integration/react";
// // import { ToastContainer } from "react-toastify";
// // import { persistor, store } from "./store";

// // function App() {
// //   return (
// //     <>
// //       <ToastContainer />
// //       <Provider>
// //         <AppRoutes />
// //       </Provider>
// //     </>
// //   );
// // }

// // export default App;

// import React from "react";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { ToastContainer } from "react-toastify";
// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// import AppRoutes from "./routes/routes";

// // Redux persist configuration
// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// // Create the Redux store
// const store = configureStore({
//   reducer: persistedReducer,
//   // Add any middleware or enhancers here if needed
// });

// // Create the persistor for redux-persist
// const persistor = persistStore(store);

// function App() {
//   return (
//     <>
//       <ToastContainer />
//       <Provider store={store}>
//         <PersistGate loading={null} persistor={persistor}>
//           <AppRoutes />
//         </PersistGate>
//       </Provider>
//     </>
//   );
// }

// export default App;

import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/ProfileAccount";
import RoleSelect from "./components/RoleSelect";
import Register from "./components/Register";
import AllChats from "./components/AllChats";
import PasswordAuthenticate from "./components/PasswordAuthenticate";
import PersonalChat from "./components/PersonalChat";
import UserProfile from "./components/UserProfile";
import ContactsPage from "./components/ContactsPage";
import HomePage from "./components/HomePage";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/RoleSelect" element={<RoleSelect />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/AllChats" element={<AllChats />} />
          <Route
            path="/PasswordAuthenticate"
            element={<PasswordAuthenticate />}
          />
          <Route path="/personal-chat/:name" element={<PersonalChat />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/ContactsPage" element={<ContactsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
