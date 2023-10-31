import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactRedux } from 'redux/contactsSlice';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const handleSubmit = e => {
    e.preventDefault();

    const alreadyExist = contacts?.some(
      el => el.name.toLowerCase() === name.toLowerCase()
    );

    if (alreadyExist) return alert(`${name} is already in contacts.`);
    dispatch(addContactRedux({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={e => {
            setName(e.target.value);
          }}
          value={name}
        />
      </label>
      <label>
        <p>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={e => {
            setNumber(e.target.value);
          }}
          value={number}
        />
      </label>
      <button type={'submit'}>Add contact</button>
    </form>
  );
};
