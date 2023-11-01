import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts } from 'api/api';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAllContacts',
  async () => {
    try {
      const res = await fetchContacts();
      //   console.log(res);
      return res;
    } catch (error) {
      throw error;
      //   console.log(error);
    }
  }
);
