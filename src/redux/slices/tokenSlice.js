import { createSlice } from '@reduxjs/toolkit';

export const tokenSlice = createSlice({
  name: 'token',
  initialState: '',
  reducers: {
    createToken(state, action) {
      return (state = action.payload);
    },
    deleteToken(state, _) {
      return (state = '');
    },
  },
});

export const { createToken, deleteToken } = tokenSlice.actions;
export default tokenSlice;
