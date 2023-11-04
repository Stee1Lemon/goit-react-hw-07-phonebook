import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts } from 'api/api';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAllContacts',
  async () => {
    try {
      const res = await fetchContacts();
      if (!res.ok) throw new Error('Request failed');
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);
