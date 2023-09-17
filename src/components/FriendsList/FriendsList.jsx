import { FriendsListItem } from 'components/FriendsListItem/FriendsListItem';
import css from './FriendsList.module.css';

export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
      {friends.map(friend => {
        return (
          <FriendsListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnLine={friend.isOnLine}
          ></FriendsListItem>
        );
      })}
    </ul>
  );
};
