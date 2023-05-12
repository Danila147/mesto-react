import React from 'react';

function ImagePopup() {
  return (
    <div className='popup popup_opened-image popup_background'>
      <div className='popup__image-container'>
        <button type='button' className='popup__close'></button>
        <figure className='popup__figure'>
          <img
            src='https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
            alt=''
            className='popup__image'
          />
          <figcaption className='popup__caption'></figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
