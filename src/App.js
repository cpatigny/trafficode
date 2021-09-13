import React, { useState, useEffect, useContext } from 'react';
import Manager from './services/firebase/Manager';
import { getAuth, signOut } from 'firebase/auth';
import { UserContext } from './providers/UserProvider';

import './App.css';

import Card from './components/Card/Card';
import Loading from './components/Loading/Loading';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import CardForms from './components/CardForms/CardForms';

const App = () => {
  
  const [cards, setCards] = useState(false);
  const [showCardForm, setShowCardForm] = useState(false);
  const [cardToUpdate, setCardToUpdate] = useState(false)
  
  let { user, setUser, userData } = useContext(UserContext);

  useEffect(() => {
    let cardManager = new Manager('cards');

    cardManager.getAll(snapshot => {
      let data = snapshot.val();
      setCards(data);
    });
  }, []);

  const handleSignOut = () => {
    const auth = getAuth();

    signOut(auth)
      .then(() => setUser(false))
      .catch(error => console.error(error));
  };

  const closeCardForm = () => setShowCardForm(false);

  if (user === 'loading' || userData === 'loading') return <Loading />;

  return (
    <div className='app'>
      <h1>
        Code de la route
        { user && <button onClick={() => setShowCardForm(true)}>+ Add card</button> }
      </h1>

      {cards && Object.keys(cards).map(key => (
        <Card
          key={key}
          id={key}
          title={cards[key].title}
          content={cards[key].content} 
        />
      ))}

      <Modal isShow={showCardForm} close={closeCardForm}>
        <CardForms
          closeModal={closeCardForm}
          cardToUpdate={cardToUpdate}
        />
      </Modal>

      <Footer user={user} handleSignOut={handleSignOut} />
    </div>
  );
}

export default App;
