import {ImageSourcePropType} from 'react-native';
import moment from 'moment';

export interface UserInterface {
  id: number;
  username: string;
  fullname: string;
  avatar: ImageSourcePropType;
}

export interface CommentInterface {
  user: UserInterface;
  comment: string;
}

export interface PostInterface {
  id: number;
  datetime: moment.Moment;
  user: UserInterface;
  caption: string;
  img: ImageSourcePropType;
  imgUri?: string;
  likes: String[];
  comments?: CommentInterface[];
}
