import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import './App.css';
function App() {
  const [editContact, setEditContact] = useState(null); // State to hold the contact being edited

  return (
    <Provider store={store}>
      <div className="App">
        <ContactList setEditContact={setEditContact} /> {/* Pass the function to set the edit contact */}
        <ContactForm existingContact={editContact} setEditContact={setEditContact} /> {/* Pass edit contact */}
      </div>
    </Provider>
  );
}

export default App;
