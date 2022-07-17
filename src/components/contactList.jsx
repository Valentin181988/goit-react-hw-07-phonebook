export const ContactList = ({contacts, onDelete, deleting}) => {
    return <ul>
        {contacts.map(contact => 
            <li key={contact.id}>
                {contact.name}
                {contact.number}
                <button onClick={() => onDelete(contact.id)}>
                    {deleting ? 'Deleting...' : 'Delete'}
                </button>
            </li>)}
    </ul>
};