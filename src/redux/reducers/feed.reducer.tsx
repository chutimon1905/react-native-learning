import {AnyAction} from 'redux';
import {testData} from '../../shared/testData';
import {ADD_NEW_POST} from '../types';
import {PostInterface} from '../types/feed.types';

interface FeedState {
  posts: PostInterface[];
}

const initialState: FeedState = {
  posts: testData.posts,
};

export function feedReducer(
  state: FeedState = initialState,
  action: AnyAction,
): FeedState {
  switch (action.type) {
    case ADD_NEW_POST:
      console.log(action.payload);
      let newPosts = [{...action.payload}, ...state.posts];
      return {
        ...state,
        posts: newPosts,
      };

    default:
      return state;
  }
}
