import PopupWithForm from './PopupWithForm';
import { useRef } from 'react';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  const inputRef = useRef('');

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
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
        ref={inputRef}
      />
      <span className='popup__span popup__info-error avatarEdit-input-error'></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
