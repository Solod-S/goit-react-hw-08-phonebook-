import { createSlice } from '@reduxjs/toolkit';

export const myProfileSlice = createSlice({
  name: 'token',
  initialState: {},
  reducers: {
    saveProfileData(state, action) {
      return (state = action.payload);
    },
    deleteProfileData(state, _) {
      return (state = {});
    },
  },
});

export const { saveProfileData, deleteProfileData } = myProfileSlice.actions;
