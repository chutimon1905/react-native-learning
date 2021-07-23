import moment from 'moment';

export function dateTimeToNowString(
  datetime: moment.Moment,
  withoutSuffix?: boolean,
): String {
  const datetimeString = moment(datetime).fromNow(withoutSuffix);
  console.log(datetimeString);
  return datetimeString.charAt(0).toUpperCase() + datetimeString.slice(1);
}

export function likeCount(likes: String[]) {
  console.log(likes);
  const likeCount = likes.map(i => parseInt(i)).reduce((a, b) => a + b, 0);
  return Math.abs(likeCount) > 999
    ? (Math.sign(likeCount) * Math.round(Math.abs(likeCount) / 100)) / 10 + 'k'
    : Math.sign(likeCount) * Math.abs(likeCount);
}
