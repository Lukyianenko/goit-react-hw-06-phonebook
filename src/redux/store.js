import { configureStore } from '@reduxjs/toolkit';
import { contactsState } from './contactsState';
import { persistStore, 
        persistReducer, 
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedContactsReducer = persistReducer(persistConfig, contactsState.reducer)


export const store = configureStore({
    reducer: {
        contact: persistedContactsReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);