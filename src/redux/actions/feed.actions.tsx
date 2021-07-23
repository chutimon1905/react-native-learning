import {ADD_NEW_POST, PostInterface} from '../types';

const setAddPost = (post: PostInterface) => {
  return {
    type: ADD_NEW_POST,
    payload: post,
  };
};

export function addPost(post: PostInterface) {
  return dispatch => {
    dispatch(setAddPost(post));
  };
}
