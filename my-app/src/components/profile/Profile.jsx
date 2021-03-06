import './Profile.css'
// import user from './user.json'
import PropTypes from "prop-types";


const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <div className="profile">
            <div className="description">
                <img
                    src={avatar}
                    alt="User avatar"
                    className="profileAvatar"
                />
                <p className="profileName">{username}</p>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
            </div>

            <ul className="stats">
                <li>
                    <span className="stats_label">Followers</span>
                    <span className="stats_quantity"> {stats.followers}</span>
                </li>
                <li>
                    <span className="stats_label">Views</span>
                    <span className="stats_quantity"> {stats.views}</span>
                </li>
                <li>
                    <span className="stats_label">Likes</span>
                    <span className="stats_quantity"> {stats.likes}</span>
                </li>
            </ul>
        </div>
    );
}



Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};
export default Profile;
