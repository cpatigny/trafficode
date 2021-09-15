import React, { useState, useEffect, useContext } from 'react';
import Manager from './services/firebase/Manager';
import { getAuth, signOut } from 'firebase/auth';
import { UserContext } from './providers/UserProvider';
import { strContains } from './services/strContains';

import './App.css';

import noResultFoundImg from './assets/img/undraw-lost-online.svg';

import Card from './components/Card/Card';
import Loading from './components/Loading/Loading';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import CardForms from './components/CardForms/CardForms';
import AddCardButton from './components/AddCardButton/AddCardButton';
import SearchBar from './components/SearchBar/SearchBar';
import NothingToShow from './components/NothingToShow/NothingToShow';

const App = () => {
  
  const [cards, setCards] = useState('loading');
  const [cardsToShow, setCardsToShow] = useState(false);
  const [showCardForm, setShowCardForm] = useState(false);
  const [cardToUpdate, setCardToUpdate] = useState(false);
  const [search, setSearch] = useState('');
  const [noSearchResult, setNoSearchResult] = useState(false);
  
  let { user, setUser, userData } = useContext(UserContext);

  useEffect(() => {
    let cardManager = new Manager('cards');

    cardManager.getAll(snapshot => {
      let data = snapshot.val();
      setCards(data);
    });
  }, []);

  useEffect(() => {

    if (cards === 'loading' || cards === null) return;

    let matchingCards = {};

    Object
      .keys(cards)
      .filter(cardKey => strContains(cards[cardKey].title, search))
      .forEach(cardKey => matchingCards[cardKey] = cards[cardKey]);
      
    if (Object.keys(matchingCards).length === 0) matchingCards = null;

    setNoSearchResult(matchingCards === null);
    setCardsToShow(matchingCards);
  }, [cards, search]);

  const handleSignOut = () => {
    const auth = getAuth();

    signOut(auth)
      .then(() => setUser(false))
      .catch(error => console.error(error));
  };

  const openCardForm = () => setShowCardForm(true);

  const closeCardForm = () => {
    setShowCardForm(false);
    setCardToUpdate(false);
  };

  if (user === 'loading' || userData === 'loading' || cards === 'loading') return <Loading />;

  return (
    <div className='app'>
      <div className='top'>
        <h1>Trafficode</h1>
        <SearchBar search={search} setSearch={setSearch} />
      </div>

      <div className='wrap'>
        <h2>Liste des fiches de révisions</h2>
        { user && <AddCardButton openCardForm={openCardForm}>+ Add card</AddCardButton> }
      </div>

      { noSearchResult && 
        <NothingToShow
          className='no-list-to-show'
          src={noResultFoundImg}
          message='Aucun résultat ne correspond à votre recherche'
          alt='no result illustration'
        />
      }

      {cardsToShow && Object.keys(cardsToShow).map(key => (
        <Card
          key={key}
          user={user}
          card={{ ...cardsToShow[key], id: key }}
          setCardToUpdate={setCardToUpdate}
          openCardForm={openCardForm}
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
