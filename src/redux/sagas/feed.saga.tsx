import {takeEvery, call, put, takeLatest, all} from 'redux-saga/effects';
import {feedService} from '../../services';
import {
  getInitFeedSuccess,
  GET_INIT_FEED,
  SET_LOADING,
  SET_TEXT_INPUT,
} from '../actions';
import {PostInterface, UPDATE_FEED} from '../types';

export default function* feedSaga() {
  console.log('Hello From Redux-Saga!');
  yield all([takeLatest(GET_INIT_FEED, getInitFeed)]);
}

function* getInitFeed(): any {
  try {
    const payload = yield call(feedService.updateFeed);
    yield put(getInitFeedSuccess({posts: payload}));
  } catch (e) {
    yield put({type: 'API_ERROR', payload: e});
  }
}

// Fetch a list of pokemon names
// Chaining promises and checking Promise.all
async function fetchAll() {
  let pokemons: any[] = [];

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=5`);
    const json = await response.json();
    const arr = json.results;
    return Promise.all(
      arr.map(async (pokemon: any) => {
        const result = pokemon.name;
        pokemons.push(result);
      }),
    ).then(() => {
      return {pokemons};
    });
  } catch (e) {
    throw new Error(`fetching list of pokemons went wrong`);
  }
}

// // Set the title of todo
// function* setTextInput({payload}) {
//   yield put({type: SET_TEXT_INPUT, payload});
// }

// // Create post
// function* createTodo({payload}) {
//   yield put({type: SET_LOADING});

//   const newPost = yield call(createNewTodo, payload);

//   yield put({type: UPDATE_FEED, payload: newPost});

//   // Clear todo after creating
//   yield put({type: CLEAR_TODO_TITLE});
// }
