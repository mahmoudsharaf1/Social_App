import { combineReducers } from '@reduxjs/toolkit';
import { firstTimeReducer } from './slices/index.js';
import authSlice from './slices/authSlice.js';
import postSlice from './slices/postSlice.js';

const RootReducer = combineReducers({
  firstTimeReducer,
  auth: authSlice,
  post: postSlice
});

export default RootReducer;
