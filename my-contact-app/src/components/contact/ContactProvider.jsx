import React, { createContext, useState } from 'react';

const ContactContext = createContext();

const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '987-654-3210' },
    { id: 3, name: 'Tom Wilson', email: 'tom.wilson@example.com', phone: '456-789-0123' },
  ]);
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <ContactContext.Provider value={{ contacts, selectedContact, setSelectedContact }}>
      {children}
    </ContactContext.Provider>
  );
};

export { ContactProvider, ContactContext };