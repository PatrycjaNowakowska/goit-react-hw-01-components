import './App.module.css';
import Profile from './components/profile/Profile';
import Statistics from "./components/statistics/Statistics";
import FriendList from "./components/friendlist/FriendList";
import TransactionHistory from './components/transactionhistory/TransactionHistory';

import user from "./components/profile/user.json";
import data from "./components/statistics/data.json";
import friends from './components/friendlist/friends.json';
import transactions from './components/transactionhistory/transactions.json';


function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
}

export default App;
