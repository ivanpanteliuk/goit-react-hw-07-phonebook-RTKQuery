import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from '../services/contactsAPIService';
import { Notify } from 'notiflix';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      return await contactsAPI.fetchContacts();
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const data = await contactsAPI.fetchPostContact(contact);
      Notify.success(`"${data.name}" added to phonebook successfully`);
      return data;
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const data = await contactsAPI.fetchDeleteContact(id);
      Notify.success(`Contact "${data.name}" was deleted successfully`);
      return data;
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);
