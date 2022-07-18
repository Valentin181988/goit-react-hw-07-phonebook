import { useSelector } from 'react-redux';
import { 
    useFetchContactsQuery, 
    useDeleteContactMutation 
} from "../../redux/contactSlice";
import { ContactList } from "./contactList";
import { Spinner } from "../Spinner/spinner";

export const Contacts = () => {

    const { data: contacts, isFetcing } = useFetchContactsQuery();
    const [ deleteContact, {isLoading: isDeleting} ] = useDeleteContactMutation();    
    const filterValue = useSelector(state => state.filter.value);

    const getVisibleContacts = () => {    
    const normalizedFilter = filterValue.toLowerCase();

    if (!contacts) {
        return;
    };

    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter));
  };

  const searchContact = getVisibleContacts();

    return(
        <div>
            { isFetcing && <Spinner />}
            { contacts && 
            <ContactList 
            contacts={searchContact} 
            onDelete={deleteContact} 
            deleting={isDeleting}/>}
        </div>
    );
};