import { createSlice } from '@reduxjs/toolkit';

export const myTokenSlice = createSlice({
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

export const { createToken, deleteToken } = myTokenSlice.actions;
