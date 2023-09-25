import css from './Friends.module.css';
import { FriendListItem } from './FriendsListItem';

export const FriendList = ({ friends }) => (
  <ul className={css['friend-list']}>
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
  </ul>
);
