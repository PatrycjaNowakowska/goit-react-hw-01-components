import './FriendList.css'
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map((friend) =>
                <FriendListItem key={friend.id} friend={friend} />)}
</ul>
    )
}

export default FriendList;