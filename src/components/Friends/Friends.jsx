import css from './Friends.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={css.item}>
    <span
      className={`${css.status} ${isOnline ? css.online : css.offline}`}
    ></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
);

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
