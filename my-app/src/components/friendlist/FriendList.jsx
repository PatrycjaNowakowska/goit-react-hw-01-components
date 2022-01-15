import './FriendList.css'
import FriendListItem from './FriendListItem';
import PropTypes from "prop-types";

const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map((friend) =>
                <FriendListItem key={friend.id} friend={friend} />)}
</ul>
    )
}


FriendList.propTypes = {
  friends: PropTypes.array,
};



export default FriendList;