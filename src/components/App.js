import { useState, useEffect } from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import { api } from '../utils/Api';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [name, setUserName] = useState('');
  const [about, setUserAbout] = useState('');
  const [avatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([{ name, about, avatar }, cards]) => {
        setUserName(name);
        setUserAbout(about);
        setUserAvatar(avatar);
        setCards(cards);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (
      isEditProfilePopupOpen ||
      isAddPlacePopupOpen ||
      isEditAvatarPopupOpen
    ) {
      document.addEventListener('keydown', handleEscClose);
      document.addEventListener('click', handleOverlayClick);
    }
    return () => {
      document.removeEventListener('keydown', handleEscClose);
      document.removeEventListener('click', handleOverlayClick);
    };
  }, [isEditProfilePopupOpen, isAddPlacePopupOpen, isEditAvatarPopupOpen]);

  function handleEscClose(e) {
    if (e.key === 'Escape') {
      closeAllPopups();
    }
  }

  function handleOverlayClick(e) {
    if (e.target.classList.contains('popup__opened')) {
      closeAllPopups();
    }
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  return (
    <div className='root'>
      <div className='page'>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          userName={name}
          userDescription={about}
          userAvatar={avatar}
          cards={cards}
        />
        <Footer />
        <ImagePopup />
        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />
        <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        />
      </div>
    </div>
  );
}

export default App;

{
  /* <div className='popup popup_profile-edit'>
<div className='popup__container'>
  <button type='button' className='popup__close'></button>
  <h2 className='popup__title'>Редактировать профиль</h2>
  <form
    name='profile-edit'
    className='form form_profile-edit'
    novalidate
  >
    <input
      id='userName-input'
      name='userName'
      type='text'
      placeholder='Имя'
      className='popup__info popup__info_data_name'
      minlength='2'
      maxlength='40'
      required
    />
    <span className='popup__span popup__info-error userName-input-error'></span>
    <input
      id='userAbout-input'
      name='userAbout'
      type='text'
      placeholder='О себе'
      className='popup__info popup__info_data_about'
      minlength='2'
      maxlength='200'
      required
    />
    <span className='popup__span popup__info-error userAbout-input-error'></span>
    <button type='submit' className='popup__save'>
      Сохранить
    </button>
  </form>
</div>
</div>

<div className='popup popup_card-add'>
<div className='popup__container'>
  <button type='button' className='popup__close'></button>
  <h2 className='popup__title'>Новое место</h2>
  <form name='card-form' className='form form_card-add' novalidate>
    <input
      id='placeName-input'
      name='placeName'
      type='text'
      placeholder='Название'
      className='popup__info popup__info_data_place'
      minlength='2'
      maxlength='30'
      required
    />
    <span className='popup__span popup__info-error placeName-input-error'></span>
    <input
      id='placeLink-input'
      name='placeLink'
      type='url'
      placeholder='Ссылка на картинку'
      className='popup__info popup__info_data_image'
      required
    />
    <span className='popup__span popup__info-error placeLink-input-error'></span>
    <button type='submit' className='popup__save'>
      Создать
    </button>
  </form>
</div>
</div>

<div className='popup popup_avatar-edit'>
<div className='popup__container'>
  <form name='avatar-form' className='form' novalidate>
    <button className='popup__close' type='button'></button>
    <h3 className='popup__title'>Обновить аватар</h3>
    <input
      className='popup__info'
      id='avatarEdit-input'
      type='url'
      name='avatar'
      value=''
      placeholder='Ссылка на картинку'
      required
    />
    <span className='popup__span popup__info-error avatarEdit-input-error'></span>
    <button type='submit' className='popup__save'>
      Сохранить
    </button>
  </form>
</div>
</div>

<div className='popup popup_confirm'>
<div className='popup__container'>
  <form name='confirm' className='form' novalidate>
    <button className='popup__close' type='button'></button>
    <h2 className='popup__title popup__title_confirm'>Вы уверены?</h2>
    <button type='submit' className='popup__save'>
      Да
    </button>
  </form>
</div>
</div> */
}
