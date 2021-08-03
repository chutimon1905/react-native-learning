import {AnyAction} from 'redux';
import {testData} from '../../shared/testData';
import {ADD_NEW_POST, LIKE_POST, SET_LOADING} from '../types';
import {PostInterface} from '../types/feed.types';
const userId = '1';
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

function likePost(post: PostInterface) {
  if (post.isLiked || post.likes.find(like => like === userId)) {
    //decrease like
    post.likes = post.likes.filter(like => like !== userId);
    console.log('decrease: now -----> ' + post.likes);
  }
  //increase like
  else {
    post.likes.push(userId);
    console.log('increase: now -----> ' + post.likes);
  }

  return post.likes;
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
        posts: state.posts.map(post => {
          if (post.id !== action.payload) return post;
          return {
            ...post,
            isLiked: !post.isLiked,
            likes: likePost(post),
          };
        }),
        loading: false,
      };

    default:
      return state;
  }
}
