import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
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

export const { saveProfileData, deleteProfileData } = profileSlice.actions;
export default profileSlice;
