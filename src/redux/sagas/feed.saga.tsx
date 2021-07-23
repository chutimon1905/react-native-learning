import moment from 'moment';
import {takeEvery, put, call} from 'redux-saga/effects';
import {userChutimon} from '../../shared/testData';
import {ADD_NEW_POST, ADD_NEW_POST_REQ, PostInterface} from '../types';

export default function* feedSaga() {
  console.log('Hello From Redux-Saga!');
  yield takeEvery(ADD_NEW_POST_REQ as any, addPostAsync as any);

  // Create post
  function* addPostAsync(post: any): any {
    let nextNumber = 3;

    const data = yield call(fetchData);
    console.log(data);
    post = {
      id: nextNumber++,
      user: userChutimon,
      caption: post.caption + data.name,
      datetime: moment().subtract(1, 'second'),
      imgUri: data.sprites.front_default,
      likes: [],
    };
    console.log('addPost');
    console.log(post);
    yield put({type: ADD_NEW_POST, payload: post});
  }

  async function fetchData() {
    try {
      const generateRandomNuber = Math.floor(Math.random() * 200) + 1;
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/` + generateRandomNuber,
      );
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}
