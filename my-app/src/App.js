import './App.css';
import Profile from './components/profile/Profile'
import user from "./components/profile/user.json";


function App() {
  return (
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
}

export default App;
