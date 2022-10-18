import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  details: localStorage.getItem("book") || '',
}

export const bookingSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setBookingDetails: (state,action) => {
      state.details = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setBookingDetails } = bookingSlice.actions

export default bookingSlice.reducer