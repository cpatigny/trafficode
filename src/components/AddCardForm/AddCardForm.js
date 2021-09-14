import React, { useEffect, useRef, useState } from 'react';
import Manager from '../../services/firebase/Manager';

const AddCardForm = ({ closeModal }) => {

  const [cardFormData, setCardFormData] = useState({
    title: '',
    content: ''
  });

  let titleRef = useRef(null);

  useEffect(() => {
    titleRef.current.focus();
  }, [])

  const handleChange = e => {
    const { value, name } = e.target;
    setCardFormData({ ...cardFormData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    let cardManager = new Manager('cards');
    cardManager.add(cardFormData);

    closeModal();
  };

  return (
    <form className='card-form' onSubmit={handleSubmit}>
      <div className='title-field'>
        <label htmlFor='title'>Titre :</label>
        <input
          id='title'
          type='text'
          ref={titleRef}
          required
          placeholder='Mon super titre'
          name='title'
          value={cardFormData.title}
          onChange={handleChange}
          autoComplete='off'
        />
      </div>
      <div className='content-field'>
        <label htmlFor='content'>Texte :</label>
        <textarea
          id='content'
          name='content'
          required
          value={cardFormData.content}
          onChange={handleChange}
          placeholder='Écrivez le contenu ici'
        ></textarea>
      </div>
      <button>Ajouter</button>
    </form>
  );
};

export default AddCardForm;
