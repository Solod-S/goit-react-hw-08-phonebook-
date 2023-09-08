import { combineReducers } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

import {
  contactSlice,
  filterSlice,
  // modalSlice,
  profileSlice,
  tokenSlice,
} from './slices';
// import { contactSlice } from './slices/contactSlice';
// import { filterSlice } from './slices/filterSlice';
// // import { modalSlice } from './slices/modalSlice';
// import { tokenSlice } from './slices/tokenSlice';
// import { profileSlice } from './slices/profileSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token', 'profile'],
};

const rootReduser = combineReducers({
  [contactSlice.reducerPath]: contactSlice.reducer,
  filter: filterSlice.reducer,
  // modal: modalSlice.reducer,
  token: tokenSlice.reducer,
  profile: profileSlice.reducer,
});

export const persistedContactReducer = persistReducer(
  persistConfig,
  rootReduser
);
