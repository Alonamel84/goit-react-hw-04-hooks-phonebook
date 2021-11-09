import s from '../ContactsList/ContactList.module.css'
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';
const ContactList = ({ filterContacts, onDelete }) => {
    return (
       
        <ul className={s.contactList}>
            {filterContacts.map(item => (
            <ContactItem
              key={item.id}
              name={item.name}
              number={item.number}
              onDelete={onDelete}
              id={item.id}
            ></ContactItem>
          ))}</ul>
    )
}
ContactList.propTypes = {
    children: PropTypes.node
}

export default ContactList;