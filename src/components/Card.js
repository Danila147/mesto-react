import React from 'react';
import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ card, onCardDelete, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((user) => user._id === currentUser._id);
  const cardLikeButtonClassName = `place__like ${
    isLiked && 'place__like_active'
  }`;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className='card'>
      <article className='place'>
        <img
          src={card.link}
          alt={card.name}
          className='place__image'
          onClick={handleClick}
        />
        {isOwn && (
          <button
            type='button'
            className='place__delete'
            onClick={handleDeleteClick}
          ></button>
        )}
        <div className='place__container'>
          <h2 className='place__title'>{card.name}</h2>
          <div className='place__likes'>
            <button
              type='button'
              className={cardLikeButtonClassName}
              onClick={handleLikeClick}
            ></button>
            <p className='place__likes-quantity'>{card.likes.length}</p>
          </div>
        </div>
      </article>
    </li>
  );
}

export default Card;
