import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistedContactReducer } from './rootReducer';

// import { rootReduser } from './rootReducer';
import { myContactSlice } from './contactSlice';

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
