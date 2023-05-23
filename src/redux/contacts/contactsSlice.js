import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContacts } from 'redux/operations';
import {
  handleFulfilled,
  handleFulfilledAdd,
  handleFulfilledDelete,
  handleFulfilledGet,
  handlePending,
  handleRejected,
} from './handlers';

const operationsArr = [addContact, deleteContact, getContacts];

const setOperationStatus = status => operationsArr.map(el => el[status]);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder

      .addCase(getContacts.fulfilled, handleFulfilledGet)
      .addCase(addContact.fulfilled, handleFulfilledAdd)
      .addCase(deleteContact.fulfilled, handleFulfilledDelete)
      .addMatcher(isAnyOf(...setOperationStatus('pending')), handlePending)
      .addMatcher(isAnyOf(...setOperationStatus('rejected')), handleRejected)
      .addMatcher(isAnyOf(...setOperationStatus('fulfilled')), handleFulfilled);
  },
});

export const contactsReducer = contactsSlice.reducer;
