import { useDispatch, useSelector } from 'react-redux';
import { deleteContactRedux } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const deleteContact = id => {
    dispatch(deleteContactRedux(id));
  };

  const doFilteredContacts = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filteredContacts = doFilteredContacts();

  if (!filteredContacts.length) return null;

  return (
    <ul>
      {filteredContacts.map(({ name, id, number }) => {
        return (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button onClick={() => deleteContact(id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};
