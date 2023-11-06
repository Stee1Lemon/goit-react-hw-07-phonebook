import { createSlice } from '@reduxjs/toolkit';
import { fetchContactsThunk } from './thunk';

const initialState = {
  items: [],
  isLoading: false,
  error: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        state.error = '';
      })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        state => {
          state.items = [];
          state.isLoading = false;
          state.error = 'Request failed';
        }
      )
  },
});

export const { deleteContactRedux } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
