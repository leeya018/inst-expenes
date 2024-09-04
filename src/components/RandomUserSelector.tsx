import { User } from "@/interfaces/User";
import { users } from "@/util";
import { useState } from "react";

type RandomUserSelector = {
  selectedUser: User | null;
};
const RandomUserSelector: React.FC<RandomUserSelector> = ({ selectedUser }) => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">
        {selectedUser ? selectedUser.name : "No user selected"}
      </h1>
    </div>
  );
};

export default RandomUserSelector;
