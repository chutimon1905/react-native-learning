import {ImageSourcePropType} from 'react-native';
import {UserInterface} from './feed.types';

export interface StoryInterface {
  id: number;
  user: UserInterface;
  img: ImageSourcePropType;
}
