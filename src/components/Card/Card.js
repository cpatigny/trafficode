import React from 'react';
import CardActions from './CardActions';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import './Card.css';

const Card = ({ card, user, setCardToUpdate, openCardForm }) => {

  let { title, content } = card;

  let arrowItem = `<div className='arrow-item'><span class="arrow-right material-icons-round">arrow_forward</span>$1</div>`;
  let contentToShow = content.replace(/->(.*)/g, arrowItem);

  return (
    <div className='card'>
      <div className='card-header'>
        <h2 className='card-title'>{ title }</h2>
        { user && <CardActions card={card} setCardToUpdate={setCardToUpdate} openCardForm={openCardForm} /> }
      </div>

      <div className='content'>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            h1: 'h3',
            h2: 'h4',
            h3: 'h5'
          }}
        >
          { contentToShow }
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Card;
