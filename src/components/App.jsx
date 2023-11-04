import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { PhoneBook } from './App.styled';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <PhoneBook>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>Request failed</h3>}
      <ContactList />
    </PhoneBook>
  );
};
