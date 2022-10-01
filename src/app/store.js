import { configureStore } from '@reduxjs/toolkit'
import authSlice from "./slice/AuthSlice";
import ProfileSlice from './slice/ProfileSlice';
import BookSlice from './slice/BookSlice';

export const store = configureStore({
  reducer: {
    auth:authSlice,
    profile:ProfileSlice,
    booking:BookSlice
  },
})