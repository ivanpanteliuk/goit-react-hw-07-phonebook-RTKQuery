import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';

import { Input, Button, Form, Label } from './ContactForm.styled';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactsApi';
import Loader from 'components/Loader/Loader';

const notifyOptions = {
  width: '450px',
  position: 'right-top',
  distance: '20px',
  timeout: 2000,
  clickToClose: true,
  fontSize: '20px',
  cssAnimationStyle: 'zoom',
  showOnlyTheLastOne: true,
};

Notify.init(notifyOptions);

function ContactForm() {
  const { data: contacts } = useGetContactsQuery();
  const [addContact, addContactRes] = useAddContactMutation();

  const nameInputId = nanoid();
  const telInputId = nanoid();

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (
      contacts.some(
        storedContact => storedContact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return Notify.failure(`"${name}" is already in contacts.`);
    } else if (
      contacts.some(storedContact => storedContact.number === number)
    ) {
      return Notify.failure(`"${number}" is already in contacts.`);
    }

    addContact({ name: name, phone: number });
    form.reset();
  };

  if (addContactRes.error) {
    Notify.failure(
      `${addContactRes.error.status}! ${addContactRes.error.data}`
    );
  }

  if (addContactRes.isSuccess) {
    Notify.success(`Contact "${addContactRes.data?.name}" added to phonebook `);
  }

  return (
    <>
      {addContactRes.isLoading && <Loader />}
      <Form onSubmit={handleSubmit}>
        <Label htmlFor={nameInputId}>Name</Label>
        <Input
          id={nameInputId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoComplete="off"
        />
        <Label htmlFor={telInputId}>Number</Label>
        <Input
          id={telInputId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          autoComplete="off"
        />
        <Button type="submit">Add contact</Button>
      </Form>
    </>
  );
}

export default ContactForm;
