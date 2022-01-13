import './App.css';
import Profile from './components/profile/Profile';
import user from "./components/profile/user.json";

import Statistics from "./components/statistics/Statistics";
import data from "./components/statistics/data.json";

import FriendList from './components/friendlist/FriendList';
import friends from './components/friendlist/friends.json';


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
    </>
  );
}

export default App;
