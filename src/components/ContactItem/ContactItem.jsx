import React from 'react';
import PropTypes from 'prop-types';
import css from './contact-item.module.css';
import { deleteContactAction } from 'redux/contacts/contacts-slice';
import { useDispatch } from 'react-redux';

const ContactItem = ({ name, number, contactId }) => {
  const dispatch = useDispatch()

  const deleteContact = (contactId) => dispatch(deleteContactAction(contactId))

  return (
    <li key={contactId} className={css.contactItem}>
      <span className={css.contactItem__text}>{name}</span>
      <span className={css.contactItem__text}>{number}</span>
      <button
        className={css.contactItem__button}
        type="button"
        onClick={() => deleteContact(contactId)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
 
};

export default ContactItem;