import {ImageSourcePropType} from 'react-native';
import {UserInterface} from './feed.types';
import moment from 'moment';

export interface StoryInterface {
  id: String;
  user: UserInterface;
  img: ImageSourcePropType;
}
