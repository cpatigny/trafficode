import React from 'react';

import AddCardForm from '../AddCardForm/AddCardForm';
import UpdateCardForm from '../UpdateCardForm/UpdateCardForm';

const CardForms = ({ cardToUpdate, closeModal }) => {
  
  if (cardToUpdate) return (
    <UpdateCardForm cardToUpdate={cardToUpdate} closeModal={closeModal} />
  );

  return <AddCardForm closeModal={closeModal} />;
};

export default CardForms;
