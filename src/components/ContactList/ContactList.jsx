import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { Button, ListItem, List, ItemWrapper } from './ContactList.styled';
import { FaTrashAlt } from 'react-icons/fa';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  if (!filteredContacts?.length) {
    return <ItemWrapper>No contacts found.</ItemWrapper>;
  }

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ItemWrapper>
            <p>{name}: </p>
            <p>{number}</p>
          </ItemWrapper>
          <Button type="button" onClick={() => onDeleteContact(id)}>
            <FaTrashAlt />
          </Button>
        </ListItem>
      ))}
    </List>
  );
};
