import React from 'react';
import CardActions from './CardActions';

const Card = ({ card, user, setCardToUpdate, openCardForm }) => {

  return (
    <div className='card'>
      <div className='card-header'>
        <h3 className='card-title'>{ card.title }</h3>
        { user && <CardActions card={card} setCardToUpdate={setCardToUpdate} openCardForm={openCardForm} /> }
      </div>

      <div className='content'>{ card.content }</div>
    </div>
  );
};

export default Card;
