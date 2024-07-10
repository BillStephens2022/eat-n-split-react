import Friend from "./Friend";

export default function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map((friend, i) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}
