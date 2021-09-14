import React from 'react';
import Manager from '../../services/firebase/Manager';

const CardActions = ({ card, setCardToUpdate, openCardForm }) => {

  const editCard = () => {
    setCardToUpdate(card);
    openCardForm();
  };

  const deleteCard = () => {
    let text;
    let quit = false;
    let wordToEnter = 'oui';

    do {
      text = prompt(`
        Êtes-vous sûr de vouloir supprimer la card "${card.title}" ?
        (cette action est irréversible !)
        Écrivez "${wordToEnter}" pour confirmer :
      `);

      if (text === null) quit = true; // user cliked "cancel" button

      if (text === wordToEnter) {
        let cardManager = new Manager(`cards/${card.id}`);
        cardManager.delete();
      }
    } while (!quit && text !== wordToEnter);
  };

  return (
    <div className='card-actions'>
      <button id='edit-card' onClick={editCard}><span class="material-icons-round">edit</span></button>
      <button id='delete-card' onClick={deleteCard}><span class="material-icons-round">delete</span></button>
    </div>
  );
};

export default CardActions;
