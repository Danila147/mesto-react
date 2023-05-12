import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className='root'>
      <div className='page'>
        <Header />
        <Main />
        <Footer />

        <div className='popup popup_profile-edit'>
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
      </div>

      <template id='card-template'>
        <li className='card'>
          <article className='place'>
            <img
              src='https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
              alt=''
              className='place__image'
            />
            <button type='button' className='place__delete'></button>
            <div className='place__container'>
              <h2 className='place__title'></h2>
              <div className='place__likes'>
                <button type='button' className='place__like'></button>
                <p className='place__likes-quantity'></p>
              </div>
            </div>
          </article>
        </li>
      </template>
    </div>
  );
}

export default App;
