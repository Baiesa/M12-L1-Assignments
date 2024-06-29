// src/App.jsx
import React from 'react';
import { ContactProvider } from './components/contact/ContactProvider';
import ContactList from './components/contact/ContactList';
import ContactDetail from './components/contact/ContactDetail';

function App() {
  return (
    <ContactProvider>
      <div className="App">
        <ContactList />
        <ContactDetail />
      </div>
    </ContactProvider>
  );
}

export default App;