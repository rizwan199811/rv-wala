import { configureStore } from '@reduxjs/toolkit'
import authSlice from "./slice/AuthSlice";
import ProfileSlice from './slice/ProfileSlice';

export const store = configureStore({
  reducer: {
    auth:authSlice,
    profile:ProfileSlice
  },
})