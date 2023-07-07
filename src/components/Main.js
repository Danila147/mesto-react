import React from 'react';
import Card from './Card';
import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardDelete,
  onCardClick,
  cards,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className='content'>
      <section className='profile profile-position'>
        <div className='profile__avatar' onClick={onEditAvatar}>
          <img
            src={currentUser.avatar}
            alt='фото профиля'
            className='profile__image'
          />
        </div>
        <div className='profile__info'>
          <div className='profile__container'>
            <h1 className='profile__name'>{currentUser.name}</h1>
            <button
              type='button'
              className='profile__edit'
              onClick={onEditProfile}
            ></button>
          </div>
          <p className='profile__about'>{currentUser.about}</p>
        </div>
        <button
          type='button'
          className='profile__add'
          onClick={onAddPlace}
        ></button>
      </section>
      <section className='elements elements-position'>
        <ul className='elements__places'>
          {cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              onCardDelete={onCardDelete}
              onCardClick={onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
