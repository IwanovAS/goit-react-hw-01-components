import { Profile } from 'components/Profile/Profile';
import user from './user.json';
import { Statistics } from 'components/Statistics/Statistics';
import data from './data.json';
import { FriendsList } from 'components/FriendsList/FriendsList';
import friends from './friends.json';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import transactions from './transactions.json';

const userLables = {
  followers: 'Followers',
  views: 'Views',
  likes: 'Likes',
  tagSimbol: '@',
};

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      >
        {userLables}
      </Profile>

      <Statistics title="Upload stats" stats={data} />

      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};