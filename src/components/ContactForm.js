import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, updateContact } from '../redux/actions';

const ContactForm = ({ existingContact, setEditContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  // Pre-fill the form when editing an existing contact
  useEffect(() => {
    if (existingContact) {
      setName(existingContact.name);
      setEmail(existingContact.email);
      setPhone(existingContact.phone);
    } else {
      setName('');
      setEmail('');
      setPhone('');
    }
  }, [existingContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailExists = contacts.some(contact => contact.email === email && contact.id !== existingContact?.id);
    const phoneExists = contacts.some(contact => contact.phone === phone && contact.id !== existingContact?.id);

    if (emailExists) {
      alert("This email already exists!!");
    } else if (phoneExists) {
      alert("This phone number already exists!!");
    } else {
      if (existingContact) {
        dispatch(updateContact({ id: existingContact.id, name, email, phone }));
        alert("Contact updated successfully!!");
        setEditContact(null);  // Reset the editing state
      } else {
        dispatch(addContact({ id: contacts.length + 1, name, email, phone }));
        alert("Contact added successfully!!");
      }

      // Clear the form
      setName('');
      setEmail('');
      setPhone('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" required />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required />
      <button type="submit">{existingContact ? "Update Contact" : "Add Contact"}</button>
      {existingContact && <button onClick={() => setEditContact(null)}>Cancel</button>} {/* Cancel Edit */}
    </form>
  );
};

export default ContactForm;
