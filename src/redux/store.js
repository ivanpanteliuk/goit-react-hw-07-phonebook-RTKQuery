import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { filterReducer } from './filter/filterSlice';
import { contactsApi } from './contacts/contactsApi';

const rootReducer = combineReducers({
  [contactsApi.reducerPath]: contactsApi.reducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
