import moment from 'moment';
import {put, call, delay, takeLatest, takeEvery} from 'redux-saga/effects';
import {userChutimon} from '../../shared/testData';
import {ADD_NEW_POST, ADD_NEW_POST_REQ, SET_LOADING} from '../types';

export default function* feedSaga() {
  console.log('Hello From Redux-Saga!');
  yield takeEvery(ADD_NEW_POST_REQ as any, addPostAsync as any);

  // Create post
  function* addPostAsync(post: any): any {
    yield put({type: SET_LOADING});
    const generateRandomNumber = Math.floor(Math.random() * 200) + 1;
    const pokemon = yield call(fetchPokemon, generateRandomNumber);
    console.log(pokemon);
    post = {
      datetime: moment().subtract(1, 'second'),
      user: userChutimon,
      caption: post.caption + ' pokemon:' + pokemon.name,
      imgUri: pokemon.sprites.front_default,
      likes: [],
    };
    console.log('addPost');
    console.log(post);
    yield delay(1000);
    yield put({type: ADD_NEW_POST, payload: post});
  }

  async function fetchPokemon(generateRandomNumber: number) {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/` + generateRandomNumber,
      );
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}
