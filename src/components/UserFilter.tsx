import React, { useRef, useState } from "react";
import { observer } from "mobx-react-lite"; // Observer to make component reactive
import userStore from "@/stores/usersStore"; // Import the MobX store
import { User } from "@/interfaces/User";

const UserFilter: React.FC = observer(() => {
  const [searchTerm, setSearchTerm] = useState<string>(""); // To hold the search input
  const [isFocused, setIsFocused] = useState<boolean>(false); // To track input focus
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value); // Update search term as input changes
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  const handleAddParticipant = (user: User) => {
    userStore.addParticipant(user); // Add participant via store action
  };

  // Filter users by search term
  const filteredUsers = userStore.users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        ref={inputRef}
        type="text"
        placeholder="חפש משתמש..."
        value={searchTerm}
        onChange={handleSearchChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        className="relative border border-gray-300 rounded p-2 w-full mb-4"
      />

      {/* Show the filtered user list only if the input is focused */}
      {isFocused && (
        <ul className="list-disc pl-5 mb-4 absolute bg-gray-100 w-full">
          {filteredUsers.map((user) => (
            <li
              key={user.id}
              className="cursor-pointer"
              onMouseDown={() => handleAddParticipant(user)}
            >
              {user.name}
            </li>
          ))}
        </ul>
      )}

      <div>
        <h2 className="font-bold mb-2">משתתפים שנבחרו:</h2>
        <ul className="list-disc pl-5">
          {userStore.participantUsers.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default UserFilter;
