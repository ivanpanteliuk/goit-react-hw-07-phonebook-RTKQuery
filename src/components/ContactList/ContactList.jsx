import { List, ListItem, Button } from './ContactList.styled';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, phone }) => (
        <ListItem key={id}>
          <p>
            {name}: {phone}
          </p>
          <Button
            type="button"
            onClick={() => {
              deleteContact(id);
            }}
          >
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
