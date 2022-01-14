import './Profile.css'
// import user from './user.json'

const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <div className="profile">
            <div className="description">
                <img
                    src={avatar}
                    alt="User avatar"
                    className="avatar"
                />
                <p className="name">{username}</p>
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


export default Profile;
