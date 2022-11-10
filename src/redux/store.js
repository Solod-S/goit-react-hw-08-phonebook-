import { configureStore } from '@reduxjs/toolkit';
import { rootReduser } from './rootReducer';
import { myContactSlice } from './contactSlice';
import { persistedContactReducer } from './rootReducer';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
export const store = configureStore({
  reducer: persistedContactReducer,

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    myContactSlice.middleware,
  ],
});
export const persistor = persistStore(store);
