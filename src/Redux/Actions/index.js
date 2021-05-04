import axios from 'axios';

const GET_CHARACTERS = 'GET_CHARACTERS';
const CHARACTER_DETAIL = 'CHARACTER_DETAIL';

const API = 'https://rickandmortyapi.com/api/character';

export function getCharacters(apiCall = API) {
  return function (dispatch) {
    return axios(apiCall)
      .then((response) => response.data)
      .then((payload) =>
        dispatch({
          type: GET_CHARACTERS,
          payload,
        })
      );
  };
}

export function getDetail(id) {
  return function (dispatch, page) {
    return axios(API + `/${id}`)
      .then((response) => response.data.result)
      .then((payload) =>
        dispatch({
          type: CHARACTER_DETAIL,
          payload,
        })
      );
  };
}
