import { createSlice } from '@reduxjs/toolkit';
const modalSlice = createSlice({
  name: 'modal',
  initialState: { isActive: false, id: null },
  reducers: {
    toggle(state, action) {
      state.isActive = !state.isActive;
      state.id = action.payload;
    },
  },
});

export const { toggle } = modalSlice.actions;
export default modalSlice;
