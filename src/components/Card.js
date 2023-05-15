import React from 'react';

function Card({ card, onCardDelete }) {
  return (
    <li className='card'>
      <article className='place'>
        <img src={card.link} alt={card.name} className='place__image' />
        <button
          type='button'
          className='place__delete'
          onClick={onCardDelete}
        ></button>
        <div className='place__container'>
          <h2 className='place__title'>{card.name}</h2>
          <div className='place__likes'>
            <button type='button' className='place__like'></button>
            <p className='place__likes-quantity'>{card.likes.length}</p>
          </div>
        </div>
      </article>
    </li>
  );
}

export default Card;
