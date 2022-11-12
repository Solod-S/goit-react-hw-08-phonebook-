import { combineReducers } from '@reduxjs/toolkit';

import { myContactSlice } from './contactSlice';
import { myFilterSlice } from './filterSlice';
// import { myModalSlice } from './modalSlice';
import { myTokenSlice } from './TokenSlice';
import { myProfileSlice } from './ProfileSlice';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token', 'profile'],
};

export const rootReduser = combineReducers({
  [myContactSlice.reducerPath]: myContactSlice.reducer,
  filter: myFilterSlice.reducer,
  // modal: myModalSlice.reducer,
  token: myTokenSlice.reducer,
  profile: myProfileSlice.reducer,
});
export const persistedContactReducer = persistReducer(
  persistConfig,
  rootReduser
);