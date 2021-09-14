import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ user, handleSignOut }) => (
  <footer>
    <p>Made by <span className='name'>Clément</span></p>
    <div className='admin'>
      { user 
          ? <button className='sign-out' onClick={handleSignOut}>Déconnexion</button> 
          : <Link to='/admin'>Admin</Link>
      }
    </div>
  </footer>
);

export default Footer;
