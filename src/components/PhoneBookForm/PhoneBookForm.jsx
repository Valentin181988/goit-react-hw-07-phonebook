import { useState } from "react";
import toast from 'react-hot-toast';
import { useCreateContactMutation, useFetchContactsQuery } from "../../redux/contactSlice";
import { Spinner } from "../Spinner/spinner";
import { Form, Label, Input, SubmitButton } from "./PhoneBookForm.styled";

export const PhoneBookForm = () => {
    const [createContact, {isLoading}] = useCreateContactMutation();
    const { data: contacts } = useFetchContactsQuery();

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = event => {

    const {name, value} = event.target;
    
    switch(name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default: return;
    };
  };

  const alreadyInList = () => {
    return contacts.map(contact => contact.name.toLowerCase().includes(name.toLocaleLowerCase()));
  };

    const handleSubmit = e => {
        e.preventDefault();

        const searchContact = alreadyInList();

        if (searchContact.includes(true)) {
          toast.error("A contact with the same name already exists!");

          setName('');
          setNumber('');
          return;
        };

        const contact = {
          name,
          number,
        };
        
        createContact(contact);

        setName('');
        setNumber('');
    };

    return(
        <>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Label>Name</Label>
               <Input
               type="text"
               name="name"
               value={name}
               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
               required
               onChange={handleChange}/>
            
            <Label>Number</Label>
               <Input
                type="number"
                name="number"
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={handleChange}/>

            <SubmitButton type="submit" disabled={isLoading}>
                {isLoading ? <Spinner size={10} /> : "Add contact"}    
            </SubmitButton>
          </Form> 
        </>
    );
};

