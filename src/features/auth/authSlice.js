import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null,
  status: 'idle',
  phone_number: '',
  registrationMessage: null,
  error: null,
  first_name: null,
  last_name: null,
  password: null,
  role: null,
  department: null,
  image: null,
  step: 'register',
  token: null, 
  users: [], 
  chatList: [],  
  participantId: null,
};

// export const GetAllChats = createAsyncThunk(
//   'auth/GetAllChats',
//   async ({ token}, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(
//         'http://localhost:4000/api/conversations', 
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

export const GetAllChats = createAsyncThunk(
  'auth/GetAllChats',
  async ({ token }, { rejectWithValue }) => {
    try {
      console.log('Attempting to fetch all chats with token:', token);
      const response = await axios.get(
        'http://localhost:4000/api/all-chats', 
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      console.log('API response:', response.data);
      return response.data;
    } catch (error) {
      console.error('API request failed:', error);
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

export const SendReceiverId = createAsyncThunk(
  'auth/SendReceiverId',
  async ({ token, participantId }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'http://localhost:4000/api/conversations', 
        { participantId }, 
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const GetUsers = createAsyncThunk(
  'auth/GetUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:4000/api/users');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const passwordcheck = createAsyncThunk(
  'auth/passwordcheck',
  async ({ phone_number, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:4000/api/auth/login', { phone_number, password });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (phone_number, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:4000/api/auth/validate-at-login', { phone_number });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (phone_number, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:4000/api/auth/validate-at-register', { phone_number });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userDetails = createAsyncThunk(
  'auth/userDetails',
  async ({ phone_number, first_name, last_name, password, department, role, image }, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:4000/api/auth/register', { phone_number, first_name, last_name, password, department, role, image });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
    },
    addToChatList: (state, action) => {
      if (!state.chatList.some(user => user.name === action.payload.name)) {
        state.chatList.push(action.payload);
      }
    },
    save_info(state, action) {
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.password = action.payload.password;
    },
    setStep(state, action) {
      state.step = action.payload;
    },
    setPhoneNumber(state, action) {
      state.phone_number = action.payload;
    },
    SetparticipantId(state, action) {
      state.participantId = action.payload;
      console.log("The participant id is" + state.participantId)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(register.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.registrationMessage = action.payload.message;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(userDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(userDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.registrationMessage = action.payload.message;
      })
      .addCase(userDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(passwordcheck.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(passwordcheck.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.payload.token;
        state.registrationMessage = action.payload.message;
        localStorage.setItem('token', action.payload.token);
        console.log("Token stored in state:", state.token);
      })
      .addCase(passwordcheck.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(GetUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(GetUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(GetUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(SendReceiverId.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(SendReceiverId.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(SendReceiverId.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(GetAllChats.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.chatList = action.payload; 
         console.log("Storing chats in localStorage:", action.payload);
        // localStorage.setItem('AllChats', JSON.stringify(action.payload));
      })
      .addCase(GetAllChats.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        console.error("GetAllChats failed:", action.payload);
      });
  }
});

export const { logout, save_info, setStep, setPhoneNumber, addToChatList, SetparticipantId } = authSlice.actions;

export default authSlice.reducer;
