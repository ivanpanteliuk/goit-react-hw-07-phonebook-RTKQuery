import { Heading } from 'components/App/App.styled';
import ContactList from 'components/ContactList/ContactList';
import FilterInput from 'components/FilterInput/FilterInput';
import Loader from 'components/Loader/Loader';
import { Notify } from 'notiflix';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contacts/contactsApi';
import { selectFilter } from 'redux/selectors';

export const ContactsSection = () => {
  const { isLoading, isError, error, data: contacts } = useGetContactsQuery();
  const filter = useSelector(selectFilter);
  const visibleContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (isError) {
    Notify.failure(`${error?.status}! ${error?.error}`);
  }

  return (
    <>
      {isLoading && <Loader />}
      {!!contacts?.length && (
        <>
          <Heading>Contacts</Heading>
          {contacts?.length > 1 && <FilterInput />}
          {!!visibleContacts?.length && (
            <ContactList contacts={visibleContacts} />
          )}
        </>
      )}
    </>
  );
};

export default ContactsSection;
