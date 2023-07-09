class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _handleResponse(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Ошибка: ${response.status}`);
  }

  _request(url, settings) {
    return fetch(url, settings).then(this._handleResponse);
  }

  getUserInfo() {
    return this._request(`${this._url}/users/me`, {
      headers: this._headers,
    });
  }

  getCards() {
    return this._request(`${this._url}/cards`, {
      headers: this._headers,
    });
  }

  setUserInfo(data) {
    return this._request(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.userName,
        about: data.userAbout,
      }),
    });
  }

  addNewCard(data) {
    return this._request(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.placeName,
        link: data.placeLink,
      }),
    });
  }

  deleteCard(id) {
    return this._request(`${this._url}/cards/${id}/`, {
      method: 'DELETE',
      headers: this._headers,
    });
  }

  changeLikeCardStatus(id, status) {
    if (status) {
      return this.likeCard(id);
    } else {
      return this.unlikeCard(id);
    }
  }

  likeCard(id) {
    return this._request(`${this._url}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers,
    });
  }

  unlikeCard(id) {
    return this._request(`${this._url}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    });
  }

  setAvatar(data) {
    return this._request(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    });
  }

  setUserInfo(data) {
    return this._request(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    });
  }
}

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-58',
  headers: {
    authorization: 'c6f5eadd-63c5-4f0b-8b61-abbc227e52a4',
    'Content-Type': 'application/json',
  },
});

export { api };
