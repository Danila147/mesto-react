import React from 'react';

function PopupWithForm({ name, isOpen, onClose, title, children }) {
  return (
    <div className={`popup popup_${name} ${isOpen ? 'popup__opened' : ''}`}>
      <div className='popup__container'>
        <button
          type='button'
          className='popup__close'
          onClick={onClose}
        ></button>
        <h2 className='popup__title'>{title}</h2>
        <form name={name} className='form' noValidate>
          {children}
          <button type='submit' className='popup__save'>
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
