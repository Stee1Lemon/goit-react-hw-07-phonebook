import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContactRedux: {
      prepare(contact) {
        return {
          payload: { id: nanoid(), ...contact },
        };
      },
      reducer(state, action) {
        state.push(action.payload);
      },
    },
    deleteContactRedux(state, action) {
      return state.filter(el => el.id !== action.payload);
    },
  },
});

export const { addContactRedux, deleteContactRedux } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
