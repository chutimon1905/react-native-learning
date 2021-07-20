import {ImageSourcePropType} from 'react-native';
import moment from 'moment';

export interface UserInterface {
  id: String;
  username: string;
  fullname: string;
  avatar: ImageSourcePropType;
}

export interface CommentInterface {
  user: UserInterface;
  comment: string;
}

export interface PostInterface {
  id: string;
  datetime: moment.Moment;
  user: UserInterface;
  caption: string;
  img: ImageSourcePropType;
  likes: String[];
  comments: CommentInterface[];
}

export const UPDATE_FEED = 'UPDATE_FEED';
export const LIKE_POST = 'LIKE_POST';
interface UpdateFeedAction {
  type: typeof UPDATE_FEED;
  payload: PostInterface[];
}

interface LikePostAction {
  type: typeof LIKE_POST;
  payload: PostInterface[];
}

export type FeedActionTypes = UpdateFeedAction | LikePostAction;
