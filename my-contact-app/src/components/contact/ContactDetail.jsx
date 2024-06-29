import React, { useContext } from 'react';
import { ContactContext } from './ContactProvider';

const ContactDetail = () => {
  const { selectedContact } = useContext(ContactContext);

  return (
    <div>
      {selectedContact ? (
        <>
          <h2>Contact Details</h2>
          <p>Name: {selectedContact.name}</p>
          <p>Email: {selectedContact.email}</p>
          <p>Phone: {selectedContact.phone}</p>
        </>
      ) : (
        <p>Please select a contact.</p>
      )}
    </div>
  );
};

export default ContactDetail;