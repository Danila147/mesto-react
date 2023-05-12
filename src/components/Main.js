import React from 'react';
import avatar from '../images/profile.jpg';

function Main({ onEditAvatar, onEditProfile, onAddPlace }) {
  return (
    <main className='content'>
      <section className='profile profile-position'>
        <div className='profile__avatar' onClick={onEditAvatar}>
          <img src={avatar} alt='фото профиля' className='profile__image' />
        </div>
        <div className='profile__info'>
          <div className='profile__container'>
            <h1 className='profile__name'>Семенов Данила</h1>
            <button
              type='button'
              className='profile__edit'
              onClick={onEditProfile}
            ></button>
          </div>
          <p className='profile__about'>Веб-разработчик</p>
        </div>
        <button
          type='button'
          className='profile__add'
          onClick={onAddPlace}
        ></button>
      </section>
      <section className='elements elements-position'>
        <ul className='elements__places'></ul>
      </section>
    </main>
  );
}

export default Main;
