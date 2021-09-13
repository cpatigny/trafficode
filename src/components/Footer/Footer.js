import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ user, handleSignOut }) => (
  <footer>
    <p>Made by Clément for traffic code learners</p>
    <div>
      { user 
          ? <button onClick={handleSignOut}>Sign out</button> 
          : <Link to='/admin'>Admin</Link>
      }
    </div>
  </footer>
);

export default Footer;
