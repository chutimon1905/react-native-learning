import {AnyAction} from 'redux';
import {testData} from '../../shared/testData';
import {ADD_NEW_POST, LIKE_POST, SET_LOADING} from '../types';
import {PostInterface} from '../types/feed.types';

interface FeedState {
  posts: PostInterface[];
  loading: boolean;
}

const initialState: FeedState = {
  posts: testData.posts,
  loading: false,
};

function nextPostId(posts: PostInterface[]) {
  const maxId = posts.reduce(
    (maxId: number, post: PostInterface) => Math.max(post.id, maxId),
    -1,
  );
  return maxId + 1;
}

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
    case ADD_NEW_POST:
      return {
        ...state,
        posts: [
          {id: nextPostId(state.posts), ...action.payload},
          ...state.posts,
        ],
        loading: false,
      };
    case LIKE_POST:
      return {
        ...state,
        posts: {...action.payload, ...state.posts},
      };

    default:
      return state;
  }
}
