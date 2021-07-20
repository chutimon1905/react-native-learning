import {AnyAction} from 'redux';
import {
  CLEAR_TEXT_INPUT,
  GET_INIT_FEED,
  GET_INIT_FEED_SUCCESS,
  SET_LOADING,
  SET_TEXT_INPUT,
} from '../actions';
import {LIKE_POST, UPDATE_FEED, PostInterface} from '../types/feed.types';

interface FeedState {
  loading: boolean;
  posts: PostInterface[];
  textInput: string;
}

const initialState: FeedState = {
  loading: false,
  posts: [],
  textInput: '',
};

export function feedReducer(
  state: FeedState = initialState,
  action: AnyAction,
): FeedState {
  switch (action.type) {
    // Set loading
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_INIT_FEED:
      return {
        ...state,
        posts: action.payload,
      };

    case GET_INIT_FEED_SUCCESS:
      return {
        ...state,
        posts: action.payload,
      };

    case UPDATE_FEED:
      return {
        ...state,
        posts: action.payload,
      };

    case LIKE_POST:
      return {
        ...state,
        posts: action.payload,
      };

    case SET_TEXT_INPUT:
      return {
        ...state,
        textInput: action.payload,
      };
    // Clear textinput after creating a new one
    case CLEAR_TEXT_INPUT:
      return {
        ...state,
        textInput: '',
      };
    default:
      return state;
  }
}
