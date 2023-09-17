import css from './Profile.module.css';

export const Profile = ({
  children,
  username,
  tag,
  location,
  avatar,
  stats,
}) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          className={css.avatar}
          src={avatar}
          alt={`${username}_${avatar}`}
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>
          {children.tagSimbol}
          {tag}
        </p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>{children.followers}</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={css.label}>{children.views}</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={css.label}>{children.likes}</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
