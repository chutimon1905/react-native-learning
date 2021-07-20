import moment from 'moment';
import {StoryInterface, PostInterface, UserInterface} from '../redux/types';

const userChutimon = {
  id: '1',
  username: 'Chutimon C.',
  fullname: 'Chutimon Chaiyawong',
  avatar: require('../assets/user1.jpg'),
};
const userLisa = {
  id: '2',
  username: 'Lisa M.',
  fullname: 'Lisa Manoban',
  avatar: require('../assets/user2.jpg'),
};
const userHarry = {
  id: '3',
  username: 'Harry P.',
  fullname: 'Harry Potter',
  avatar: require('../assets/user3.jpg'),
};
const userRon = {
  id: '4',
  username: 'Ron W.',
  fullname: 'Ron Weasley',
  avatar: require('../assets/user4.jpg'),
};
const userHermione = {
  id: '5',
  username: 'Hermione G.',
  fullname: 'Hermione Grange',
  avatar: require('../assets/user5.jpg'),
};

const users: UserInterface[] = [
  userChutimon,
  userLisa,
  userHarry,
  userRon,
  userHermione,
];
const stories: StoryInterface[] = [
  {id: '1', user: userChutimon, img: require('../assets/story1.jpg')},
  {id: '2', user: userLisa, img: require('../assets/story2.jpg')},
  {id: '3', user: userHarry, img: require('../assets/story3.jpg')},
  {id: '4', user: userRon, img: require('../assets/story4.jpg')},
  {id: '5', user: userHermione, img: require('../assets/story5.jpg')},
];
const posts: PostInterface[] = [
  {
    id: '1',
    datetime: moment().subtract(1, 'minute'),
    user: userChutimon,
    caption: 'Hello React Native !',
    img: require('../assets/post1.jpg'),
    likes: ['9'],
    comments: [{user: userLisa, comment: 'Cool !!!'}],
  },
  {
    id: '2',
    datetime: moment().subtract(2, 'hour'),
    user: userLisa,
    caption: 'Post user',
    img: require('../assets/post2.jpg'),
    likes: ['999'],
    comments: [
      {user: userHarry, comment: 'Wow !'},
      {user: userRon, comment: 'Nice !'},
      {user: userHermione, comment: 'Perfect !'},
    ],
  },
];

export const testData = {
  users,
  stories,
  posts,
};
