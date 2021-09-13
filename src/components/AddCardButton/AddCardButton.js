import React from 'react';

const AddCardButton = ({ openCardForm }) => (
  <button id='add-card' className='btn btn-primary' onClick={openCardForm}>
    <span className='material-icons-round'>add</span>
    <span className='btn-text'>Ajouter une card</span>
  </button>
);

export default AddCardButton;
