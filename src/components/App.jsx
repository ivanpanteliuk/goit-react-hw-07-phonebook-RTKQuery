import { useDispatch, useSelector } from 'react-redux';
import { Heading, MainContainer, MainHeading } from './App/App.styled';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import FilterInput from './FilterInput';
import {
  selectContacts,
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/selectors';
import { useEffect } from 'react';
import { getContacts } from 'redux/operations';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import Loader from './Loader/Loader';

export function App() {
  const contacts = useSelector(selectContacts);
  const visibleContacts = useSelector(selectVisibleContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <MainContainer>
      <MainHeading>Phonebook</MainHeading>
      <ContactForm />
      {error && <ErrorMessage message={error} />}
      {isLoading && <Loader />}
      {!!contacts.length && (
        <>
          <Heading>Contacts</Heading>
          {contacts.length > 1 && <FilterInput />}
          {!!visibleContacts.length && <ContactList />}
        </>
      )}
    </MainContainer>
  );
}
