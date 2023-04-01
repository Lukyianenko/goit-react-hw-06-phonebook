import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';

// const init = () => {
//   const savedContacts = localStorage.getItem('contacts');
  
//   if(savedContacts !== null) {
//     const parsedContacts = JSON.parse(savedContacts);
//     return parsedContacts;
//   } else {
//     return [];
//   }
// }

const initialState = {
    contacts: [],
    filter: ""
  };

export const contactsState = createSlice({
        name: 'contacts',
        initialState,
        reducers: {
          update: {
            reducer(state, action) {
              const includesName = state.contacts.map(item => {return (item.name.toLowerCase())});
              if(includesName.includes(action.payload.name.toLowerCase())) {
                alert(`${action.payload.name} is already in contacts`)
              }  
              else {
                state.contacts.push(action.payload);
              }
            },
            prepare(name, number) {
              return {
                payload: {
                  id: nanoid(),
                  name,
                  number,
                },
              };
            },
          },
          onDelete: (state, action) => {
            const index = state.contacts.findIndex(contact => contact.id === action.payload);
            state.contacts.splice(index, 1);
          },
          onFilter: (state, action) => {
            state.filter = action.payload;
          }
          }
        })

export const { update, onDelete, onFilter } = contactsState.actions;