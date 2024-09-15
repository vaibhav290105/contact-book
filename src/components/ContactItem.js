import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/actions';

const ContactItem = ({ contact, setEditContact }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{contact.name}</h3>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <button onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
      <button onClick={() => setEditContact(contact)}>Edit</button> {/* Set the contact to be edited */}
    </div>
  );
};

export default ContactItem;
