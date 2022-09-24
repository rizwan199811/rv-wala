import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  image: localStorage.getItem("image") || '',
}

export const authSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setProfileImage: (state,action) => {
      state.image = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setProfileImage } = authSlice.actions

export default authSlice.reducer