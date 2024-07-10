import { useState } from "react";
import FriendsList from "./components/FriendsList";
import AddFriendForm from "./components/AddFriendForm";
import Button from "./components/Button";
import "./App.css";
import SplitBillForm from "./components/SplitBillForm";

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);    

  const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ];

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={initialFriends} />
        {showAddFriend && <AddFriendForm />}
        <Button onClick={() => setShowAddFriend((show) => !show)}>{showAddFriend ? "Close" : "Add friend"}</Button>
      </div>
      <SplitBillForm />
    </div>
  );
}
