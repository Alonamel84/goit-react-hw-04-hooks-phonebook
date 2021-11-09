import s from '../ContactItem/ContactItem.module.css'
import PropTypes from 'prop-types';
const ContactItem = ({ name,  number, onDelete,id }) => {
  return (

        <>
            <li className={s.contactItem} id={ id}>{name} {number}
            <button className={ s.delButton} type='button' onClick={() => { onDelete(id) }}>Delete</button>
           </li>
            </>
    )
}
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string,
  onDelete: PropTypes.func,
  id: PropTypes.string,
};
export default ContactItem;