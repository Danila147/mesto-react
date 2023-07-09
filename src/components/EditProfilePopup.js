import { useEffect, useState, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [about, setDescription] = useState('');

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeDescription(evt) {
    setDescription(evt.target.value);
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: name,
      about: about,
    });
  }

  return (
    <PopupWithForm
      name={'edit'}
      title={'Редактировать профиль'}
      button={'Сохранить'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
    >
      <input
        value={name || ''}
        onChange={handleChangeName}
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
        value={about || ''}
        onChange={handleChangeDescription}
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
  );
}

export default EditProfilePopup;
