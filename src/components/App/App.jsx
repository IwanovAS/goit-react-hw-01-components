import { Profile } from 'components/Profile/Profile';
import user from './user.json';
import { Statistics } from 'components/Statistics/Statistics';
import data from './data.json';
import { FriendList } from 'components/Friends/Friends';
import friends from './friends.json';
import { TransactionHistory } from 'components/Transaction/TransactionHistory';
import transactions from './transactions.json';

const userInterface = {
  followers: 'Folowers',
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
        {userInterface}
      </Profile>
      <Statistics title="Upload stats" stats={data} />;
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </>
  );
};

export default App;
