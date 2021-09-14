import React from 'react';

import './SearchBar.css';

const SearchBar = ({ search, setSearch }) => {

  const handleChange = e => {
    let wordToSearch = e.target.value;
    setSearch(wordToSearch);
  };

  const reset = () => setSearch('');

  let clearBtn = (
    <button 
      className='clear-search' 
      aria-label='effacer la recherche' 
      onClick={reset}
    >
      <span className='material-icons-round'>clear</span>
    </button>
  );

  return (
    <div className='search-bar'>
      <input
        name='search'
        type='text'
        autoComplete='off'
        placeholder='Chercher un mot'
        aria-label='Chercher un mot'
        value={search}
        onChange={handleChange}
      />

      { search ? clearBtn : <span id='search-icon' className='material-icons-round'>search</span> }
    </div>
  );
}

export default SearchBar;
