import { 
    useFetchContactsQuery, 
    useDeleteContactMutation 
} from "../redux/contactSlice";
import { ContactList } from "./contactList";
import { Spinner } from "./spinner";

export const Contact = () => {

    const { data: contacts, isFetcing, error } = useFetchContactsQuery();
    const [ deleteContact, {isLoading: isDeleting} ] = useDeleteContactMutation();

    return(
        <div>
            { isFetcing && <Spinner />}
            { contacts && 
            <ContactList 
            contacts={contacts} 
            onDelete={deleteContact} 
            deleting={isDeleting}/>}
        </div>
    );
};