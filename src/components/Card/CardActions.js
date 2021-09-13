import React from 'react';

const CardActions = ({ card, setCardToUpdate, openCardForm }) => {

  const editCard = () => {
    setCardToUpdate(card);
    openCardForm();
  };

  const deleteCard = () => {};

  return (
    <div className='card-actions'>
      <button onClick={editCard}>Edit</button>
      <button onClick={deleteCard}>Delete</button>
    </div>
  );
};

export default CardActions;
