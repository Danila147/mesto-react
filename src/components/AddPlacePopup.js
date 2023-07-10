import PopupWithForm from './PopupWithForm';
import { useEffect, useState } from 'react';

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
  const [name, setCardName] = useState('');
  const [link, setCardLink] = useState('');

  function handleAddCardName(e) {
    setCardName(e.target.value);
  }

  function handleAddCardLink(e) {
    setCardLink(e.target.value);
  }

  useEffect(() => {
    setCardName('');
    setCardLink('');
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: name,
      link: link,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
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
        value={name || ''}
        onChange={handleAddCardName}
      />
      <span className='popup__span popup__info-error placeName-input-error'></span>
      <input
        id='placeLink-input'
        name='placeLink'
        type='url'
        placeholder='Ссылка на картинку'
        className='popup__info popup__info_data_image'
        required
        value={link || ''}
        onChange={handleAddCardLink}
      />
      <span className='popup__span popup__info-error placeLink-input-error'></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
