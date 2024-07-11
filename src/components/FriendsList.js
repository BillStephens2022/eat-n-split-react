import Friend from "./Friend";

export default function FriendsList({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend, i) => (
        <Friend key={friend.id} friend={friend} onSelection={onSelection} selectedFriend={selectedFriend} />
      ))}
    </ul>
  );
}
