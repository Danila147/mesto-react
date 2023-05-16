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
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);
  const [name, setUserName] = useState('');
  const [about, setUserAbout] = useState('');
  const [avatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});

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
      isEditAvatarPopupOpen ||
      isConfirmationPopupOpen ||
      setSelectedCard
    ) {
      document.addEventListener('keydown', handleEscClose);
      document.addEventListener('click', handleOverlayClick);
    }
    return () => {
      document.removeEventListener('keydown', handleEscClose);
      document.removeEventListener('click', handleOverlayClick);
    };
  }, [
    isEditProfilePopupOpen,
    isAddPlacePopupOpen,
    isEditAvatarPopupOpen,
    isConfirmationPopupOpen,
    setSelectedCard,
  ]);

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

  function handleDeleteClick(card) {
    setIsConfirmationPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmationPopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className='root'>
      <div className='page'>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardDelete={handleDeleteClick}
          onCardClick={handleCardClick}
          userName={name}
          userDescription={about}
          userAvatar={avatar}
          cards={cards}
        />
        <Footer />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <PopupWithForm
          name={'edit'}
          title={'Редактировать профиль'}
          button={'Сохранить'}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            id='userName-input'
            name='userName'
            type='text'
            placeholder='Имя'
            className='popup__info popup__info_data_name'
            minLength='2'
            maxLength='40'
            required
          />
          <span className='popup__span popup__info-error userName-input-error'></span>
          <input
            id='userAbout-input'
            name='userAbout'
            type='text'
            placeholder='О себе'
            className='popup__info popup__info_data_about'
            minLength='2'
            maxLength='200'
            required
          />
          <span className='popup__span popup__info-error userAbout-input-error'></span>
        </PopupWithForm>
        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          name={'add'}
          title={'Новое место'}
          button={'Создать'}
        >
          <input
            id='placeName-input'
            name='placeName'
            type='text'
            placeholder='Название'
            className='popup__info popup__info_data_place'
            minLength='2'
            maxLength='30'
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
        </PopupWithForm>
        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          name={'avatar'}
          title={'Обновить аватар'}
          button={'Сохранить'}
        >
          <input
            className='popup__info'
            id='avatarEdit-input'
            type='url'
            name='avatar'
            placeholder='Ссылка на картинку'
            required
          />
          <span className='popup__span popup__info-error avatarEdit-input-error'></span>
        </PopupWithForm>
        <PopupWithForm
          isOpen={isConfirmationPopupOpen}
          onClose={closeAllPopups}
          name={'confirm'}
          title={'Вы уверены?'}
          button={'Да'}
        />
      </div>
    </div>
  );
}

export default App;
