import React from 'react';

function ImagePopup({ card, onClose }) {
  return (
    <div
      className={`popup popup_opened-image popup_background ${
        Object.keys(card).length !== 0 ? 'popup__opened' : ''
      }`}
    >
      <div className='popup__image-container'>
        <button
          type='button'
          className='popup__close'
          onClick={onClose}
        ></button>
        <figure className='popup__figure'>
          <img src={card.link} alt={card.name} className='popup__image' />
          <figcaption className='popup__caption'>{card.name}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
