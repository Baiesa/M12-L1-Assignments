import React, { useContext } from 'react';
import { ContactContext } from './ContactProvider';

const ContactList = () => {
  const { contacts, setSelectedContact } = useContext(ContactContext);

  const handleClick = (contact) => {
    setSelectedContact(contact);
  };

  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id} onClick={() => handleClick(contact)}>
            {contact.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;