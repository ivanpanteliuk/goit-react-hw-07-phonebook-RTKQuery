import Loader from './Loader/Loader';
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactsApi';
import { selectFilter } from 'redux/selectors';
import { Notify } from 'notiflix';
import { useSelector } from 'react-redux';
import { Heading, MainContainer, MainHeading } from './App/App.styled';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import FilterInput from './FilterInput';

export function App() {
  const { isLoading, isError, error, data: contacts } = useGetContactsQuery();

  const filter = useSelector(selectFilter);
  const visibleContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const [deleteContact, deleteRes] = useDeleteContactMutation();
  console.log(deleteRes);

  if (isError || deleteRes.isError) {
    Notify.failure(
      `${error?.status || deleteRes?.error?.status}! ${
        error?.error || deleteRes?.error?.data
      }`
    );
  }

  if (deleteRes.isSuccess) {
    Notify.success(`Contact "${deleteRes.data?.name}" deleted successfully`);
  }

  return (
    <MainContainer>
      <MainHeading>Phonebook</MainHeading>
      <ContactForm />

      {(isLoading || deleteRes.isLoading) && <Loader />}
      {!!contacts?.length && (
        <>
          <Heading>Contacts</Heading>
          {contacts?.length > 1 && <FilterInput />}
          {!!visibleContacts?.length && (
            <ContactList
              contacts={visibleContacts}
              deleteContact={deleteContact}
            />
          )}
        </>
      )}
    </MainContainer>
  );
}
