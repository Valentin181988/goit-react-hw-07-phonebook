import './App.css';

import { Toaster } from 'react-hot-toast';
import { PhoneBookTitle } from './components/ContactsTitle/PhoneBookTitle';
import { ContactsTitle } from './components/ContactsTitle/ContactsTitle';
import { Contacts } from './components/Contacts/Contacts';
import { PhoneBookForm } from './components/PhoneBookForm/PhoneBookForm';
import { Filter } from './components/Filter/Filter';


function App() { 

  return (
    <>
      <PhoneBookTitle title="Phone book"/>
      <PhoneBookForm />
      <ContactsTitle title="Contacts"/>
      <Filter />
      <Contacts />
      <Toaster />
    </>
  );
}

export default App;
