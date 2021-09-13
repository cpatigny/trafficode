import React from 'react';
import CardActions from './CardActions';

const Card = ({ card, user, setCardToUpdate, openCardForm }) => {

  return (
    <div className='card'>
      <div className='card-header'>
        <p>{ card.title }</p>
        { user && <CardActions card={card} setCardToUpdate={setCardToUpdate} openCardForm={openCardForm} /> }
      </div>

      <div className='content'>{ card.content }</div>
    </div>
  );
};

export default Card;
