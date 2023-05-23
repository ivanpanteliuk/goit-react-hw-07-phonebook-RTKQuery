import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
import { List, ListItem, Button } from './ContactList.styled';
import { Notify } from 'notiflix';

const ContactList = ({ contacts }) => {
  const [deleteContact, deleteRes] = useDeleteContactMutation();

  if (deleteRes.isError) {
    Notify.failure(`${deleteRes?.error?.status}! ${deleteRes?.error?.data}`);
  }
  if (deleteRes.isSuccess) {
    Notify.success(`Contact "${deleteRes.data?.name}" deleted successfully`);
  }

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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
