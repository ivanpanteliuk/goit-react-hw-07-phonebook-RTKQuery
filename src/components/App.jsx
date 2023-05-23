import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
import { MainContainer, MainHeading } from './App/App.styled';
import ContactForm from './ContactForm';
import ContactsSection from './ContactsSection';
import { Notify } from 'notiflix';

export function App() {
  const [deleteContact, deleteRes] = useDeleteContactMutation();

  if (deleteRes.isError) {
    Notify.failure(`${deleteRes?.error?.status}! ${deleteRes?.error?.data}`);
  }
  if (deleteRes.isSuccess) {
    Notify.success(`Contact "${deleteRes.data?.name}" deleted successfully`);
  }
  return (
    <MainContainer>
      <MainHeading>Phonebook</MainHeading>
      <ContactForm />
      <ContactsSection deleteContact={deleteContact} />
    </MainContainer>
  );
}
