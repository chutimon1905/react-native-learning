import {feedService} from '../../services';
import {
  UPDATE_FEED,
  LIKE_POST,
  PostInterface,
  FeedActionTypes,
  FetchActionTypes,
} from '../types';
import {request, failure} from './common.actions';
import {ActionCreator} from 'redux';

export const SET_LOADING = 'SET_LOADING';
export const SET_TEXT_INPUT = 'SET_TEXT_INPUT';
export const CLEAR_TEXT_INPUT = 'CLEAR_TEXT_INPUT';
export const CREATE_NEW_POST = 'CREATE_NEW_POST';
export const GET_INIT_FEED = 'GET_INIT_FEED';
export const GET_INIT_FEED_SUCCESS = 'GET_INIT_FEED_SUCCESS';

const updateStoredFeedSuccess: ActionCreator<FeedActionTypes> = (
  posts: PostInterface[],
) => {
  return {type: UPDATE_FEED, payload: posts};
};
const likePostSuccess: ActionCreator<FeedActionTypes> = (
  posts: PostInterface[],
) => {
  return {type: LIKE_POST, payload: posts};
};

export function updateFeed() {
  return dispatch => {
    dispatch(request());
    return feedService.updateFeed().then(
      response => {
        dispatch(updateStoredFeedSuccess(response));
      },
      error => {
        dispatch(failure('Server error.'));
      },
    );
  };
}

export function likePost({postId, userId}: {postId: String; userId: String}) {
  return dispatch => {
    dispatch(request());
    return feedService.likePost({postId, userId}).then(
      response => {
        dispatch(likePostSuccess(response));
      },
      error => {
        dispatch(failure('Server error.'));
      },
    );
  };
}

//Todo: refactor structure to redux-saga
export const addPost = (post: PostInterface) => {
  return {
    type: CREATE_NEW_POST,
    payload: post,
  };
};

export const getInitFeed = () => ({
  type: GET_INIT_FEED,
});

export const getInitFeedSuccess = (posts: any) => ({
  type: GET_INIT_FEED_SUCCESS,
  payload: posts,
});
