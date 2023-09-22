import { FriendsListItem } from 'components/FriendsListItem/FriendsListItem';
import css from './FriendsList.module.css';

export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => {
        return (
          <FriendsListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          ></FriendsListItem>
        );
      })}
    </ul>
  );
};
