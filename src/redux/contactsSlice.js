import { createSlice, nanoid } from '@reduxjs/toolkit';
import { fetchContactsThunk } from './thunk';

const initialState = {
  items: [],
  isLoading: false,
  error: '',
};

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
  extraReducers: builder => {
    builder.addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
      // console.log(state.contacts);
      state.items = payload;
    });
  },
});

export const { addContactRedux, deleteContactRedux } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
