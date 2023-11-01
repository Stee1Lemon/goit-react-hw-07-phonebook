import { useDispatch, useSelector } from 'react-redux';
import { deleteContactRedux } from 'redux/contactsSlice';
import { selectContacts, selectFilter } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContactsThunk } from 'redux/thunk';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const deleteContact = id => {
    dispatch(deleteContactRedux(id));
  };

  const doFilteredContacts = () => {
    // console.log(contacts);
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
