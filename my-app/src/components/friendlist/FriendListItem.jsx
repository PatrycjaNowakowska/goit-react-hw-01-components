import './FriendList.css'

const FriendListItem = ({ friend }) => {
    return (
<li className="item">
        {friend.isOnline === true ? <span className="online"></span> : <span className="offline"></span>}
  <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
    <p className="name">{friend.name}</p>
</li>    )
}

export default FriendListItem;