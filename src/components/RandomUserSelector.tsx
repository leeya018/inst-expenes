import { User } from "@/interfaces/User";
import { users } from "@/util";
import { useState } from "react";

const RandomUserSelector: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  const selectRandomUser = () => {
    setIsScrolling(true);
    let scrollIndex = 0;

    const interval = setInterval(() => {
      scrollIndex = (scrollIndex + 1) % users.length;
      setSelectedUser(users[scrollIndex]);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      const randomIndex = Math.floor(Math.random() * (users.length - 1)) + 1;
      setSelectedUser(users[randomIndex]);
      setIsScrolling(false);
    }, 2000);
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">
        {selectedUser ? selectedUser.name : "No user selected"}
      </h1>
      <button
        onClick={selectRandomUser}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        disabled={isScrolling}
      >
        Select Random User
      </button>
    </div>
  );
};

export default RandomUserSelector;
