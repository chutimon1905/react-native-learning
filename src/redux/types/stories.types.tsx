import {ImageSourcePropType} from 'react-native';
import {UserInterface} from './feed.types';
import moment from 'moment';

export interface StoryInterface {
  id: String;
  user: UserInterface;
  isSeen: boolean;
  isCloseFriend: boolean;
  datetime: moment.Moment;
  interactionsBlocked?: boolean;
  img: ImageSourcePropType;
}
