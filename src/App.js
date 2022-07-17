import './App.css';
import { PhoneBookTitle } from './components/ContactsTitle/PhoneBookTitle';
import { ContactsTitle } from './components/ContactsTitle/ContactsTitle';
import { Contact } from './components/Contact';
import { PhoneBookForm } from './components/PhoneBookForm/PhoneBookForm';


function App() {
  return (
    <>
      <PhoneBookTitle title="Phone book"/>
      <PhoneBookForm />
      <ContactsTitle title="Contacts"/>
      <Contact />
    </>
  );
}

export default App;
