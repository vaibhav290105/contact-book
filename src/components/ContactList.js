import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from './ContactItem';

const ContactList = ({ setEditContact }) => {
  const contacts = useSelector(state => state.contacts);

  return (
    <div>
      <h2 className="header">React Redux Contact Book</h2>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} setEditContact={setEditContact} />
      ))}
    </div>
  );
};

export default ContactList;
