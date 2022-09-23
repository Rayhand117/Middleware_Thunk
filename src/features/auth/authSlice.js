import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { fetchUsers } from '../comments/commentSlice';
import { useDispatch, useSelector} from "react-redux";
import UserList from '../comments/CommentList';

const initialState = {
  isLoginPending: false,
  isLoginSuccess: false,
  errorMessage: '',
  user: {}
}

const callLoginApi = ({email, password}) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(email == 'rayhand@gmail.com' && password == 'nimda123') {
        resolve({
          email
        })
      } else {
        reject('Your Credential is Invalid')
      }
    }, 2000)
  })
}

export const authLoginApi = createAsyncThunk(
  'auth/login',
  async ({email, password}) => {
    try {
      const response = await callLoginApi({email, password})
      return response;
    } catch (e) {
      //
      console.log('error', e);
      throw(e)
    }
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(authLoginApi.pending, (state) => {
        state.isLoginPending = true
        state.errorMessage = '';
        state.isLoginSuccess = false
      })
      .addCase(authLoginApi.fulfilled, (state, { payload }) => {
        state.isLoginPending = false
        state.isLoginSuccess = true
        state.user = payload
      })
      .addCase(authLoginApi.rejected, (state, action) => {
        state.isLoginPending = false
        state.errorMessage = action.error.message;
      })
  }
});

export default authSlice.reducer;