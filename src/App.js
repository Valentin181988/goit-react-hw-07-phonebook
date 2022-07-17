import './App.css';
import { PhoneBookTitle } from './components/ContactsTitle/PhoneBookTitle';
import { ContactsTitle } from './components/ContactsTitle/ContactsTitle';
import { Contacts } from './components/Contacts/Contacts';
import { PhoneBookForm } from './components/PhoneBookForm/PhoneBookForm';


function App() {
  return (
    <>
      <PhoneBookTitle title="Phone book"/>
      <PhoneBookForm />
      <ContactsTitle title="Contacts"/>
      <Contacts />
    </>
  );
}

export default App;
