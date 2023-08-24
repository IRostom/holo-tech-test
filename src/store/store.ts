import { configureStore } from '@reduxjs/toolkit';
import queryReducer from './querySlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'query',
  storage,
};

const persistedReducer = persistReducer(persistConfig, queryReducer);

export const store = configureStore({
  reducer: {
    query: persistedReducer,
  },
});

export const persistor = persistStore(store);

// export default persistor;
