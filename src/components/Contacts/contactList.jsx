import PropTypes from 'prop-types';
import { 
    ContactsButton,
    ContactsItem,
    ContactsItemName,
    ContactsItemNumber 
} from './contactList.styled';

export const ContactList = ({contacts, onDelete, deleting}) => {
 
    return <ul>
        {contacts.map(contact => 
            <ContactsItem key={contact.id}>
                <ContactsItemName>{contact.name}:</ContactsItemName>
                <ContactsItemNumber>{contact.number}</ContactsItemNumber>
                <ContactsButton onClick={() => onDelete(contact.id)}>
                    {deleting ? 'Deleting...' : 'Delete'}
                </ContactsButton>
            </ContactsItem>)}
    </ul>
};

ContactList.propTypes = {
    contacts: PropTypes.array,
    onDelete: PropTypes.func,
    deleting: PropTypes.bool
 };