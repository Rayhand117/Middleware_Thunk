import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./features/counter/counterSlice";
import commentsReducer from "./features/comments/commentSlice";
// import authSlice from "./features/auth/authSlice";
import logger from 'redux-logger'
export default configureStore({
  reducer: {
    counter: counterReducer,
    comments: commentsReducer,
    // auth: authSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})