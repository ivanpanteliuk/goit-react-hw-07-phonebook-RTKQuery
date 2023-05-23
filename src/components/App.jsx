import { MainContainer, MainHeading } from './App/App.styled';
import ContactForm from './ContactForm';
import ContactsSection from './ContactsSection';

export function App() {
  return (
    <MainContainer>
      <MainHeading>Phonebook</MainHeading>
      <ContactForm />
      <ContactsSection />
    </MainContainer>
  );
}
