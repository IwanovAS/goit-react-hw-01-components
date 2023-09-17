import css from './FriendsListItem.module.css';

export const FriendsListItem = ({ avatar, name, isOnLine }) => {
  return (
    <li className={css.item}>
      <span
        className={`{css.status} ${isOnLine ? css.isOnLine : css.offLine}`}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
