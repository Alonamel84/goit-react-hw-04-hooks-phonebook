import { useEffect, useState } from 'react';
import ContactForm from './components/ContactForm';
import './App.css';
import FilterName from './components/FilterName';
import ContactList from './components/ContactsList/ContactsList';
import s from './components/data/data.module.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContact = JSON.parse(localStorage.getItem('keyContact'));
    if (savedContact) setContacts(savedContact);
  }, []);

  useEffect(() => {
    if (prev => prev !== contacts) {
      localStorage.setItem('keyContact', JSON.stringify(contacts));
    }
  });

  const handleSubmit = data => {
    const shortid = require('shortid');
    const contact = { id: shortid.generate(), ...data };
    setContacts(prev => {
      return [...prev, contact];
    });
  };

  function filterName(e) {
    e.preventDefault();
    setFilter(e.currentTarget.value);
  }

  const filterArr = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  const onDelete = id => {
    setContacts(prev => prev.filter(item => item.id !== id));
  };

  const filterContacts = filterArr();

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} contact={contacts}></ContactForm>
      <h2 className={s.title}>Contacts</h2>
      <FilterName value={filter} onChange={filterName}></FilterName>
      <ContactList filterContacts={filterContacts} onDelete={onDelete}></ContactList>
    </div>
  );
};

export default App;
