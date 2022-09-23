import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/comments/';

const initialState = {
  entities: [],
  loading: false
}

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async() => {
  const response = await axios.get(URL)
    return response.data;
  }
)

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(fetchComments.fulfilled, (state, { payload }) => {
      state.entities = payload;
      state.loading = false;
      alert("Get Comment Success!");
    })
    .addCase(fetchComments.pending, (state) => {
      state.loading = true
    })
    .addCase(fetchComments.rejected, (state, action) => {
      state.loading = false
      alert('Kesalahan dari sisi user');
    })
  }
})

export default commentsSlice.reducer;

