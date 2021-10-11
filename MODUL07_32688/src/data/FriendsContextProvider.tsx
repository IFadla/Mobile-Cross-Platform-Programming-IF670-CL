import React, { useState } from "react";
import FriendsContext, { Friend } from "./friend-context";

const FriendsContextProvider: React.FC = (props) => {
  const [friends, setFriends] = useState<Friend[]>([
    {
      id: 'f1',
      name: 'John Thor',
      image: `https://randomuser.me/api/portraits/thumb/men/${Math.floor((Math.random() * 90) + 1)}.jpg`,
    },
    {
      id: 'f2',
      name: 'John Ness',
      image: `https://randomuser.me/api/portraits/thumb/men/${Math.floor((Math.random() * 90) + 1)}.jpg`,
    },
    {
      id: 'f3',
      name: 'John Doe',
      image: `https://randomuser.me/api/portraits/thumb/men/${Math.floor((Math.random() * 90) + 1)}.jpg`,
    },
  ]);

  const addFriend = (name: string, image: string) => {
    const newFriend: Friend = {
      id: Math.random().toString(),
      name: name,
      image: image,
    };

    setFriends((currFriends) => {
      return currFriends.concat(newFriend);
    });
  };

  const updateFriend = (id: string, name: string) => {
    const friendIdx = friends.findIndex((friend) => friend.id === id);
    const newFriends = [...friends];

    newFriends[friendIdx].name = name;
    setFriends(newFriends);
  };

  const deleteFriend = (id: string) => {
    setFriends(friends.filter((friend) => friend.id !== id));
  };

  return (
    <FriendsContext.Provider value={{ friends, addFriend, updateFriend, deleteFriend, }}>
      {props.children}
    </FriendsContext.Provider>
  );
};

export default FriendsContextProvider;
