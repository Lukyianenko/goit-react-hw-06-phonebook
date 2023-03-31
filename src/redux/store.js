import { configureStore } from '@reduxjs/toolkit';
import { contactsState } from './contactsState';


export const store = configureStore({
    reducer: {
        contact: contactsState.reducer,
    },
})