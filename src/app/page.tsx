"use client";

import UserFilter from "@/components/UserFilter";
import { observer } from "mobx-react-lite"; // To observe store changes
import userStore from "@/stores/usersStore"; // Import the MobX store
import { useRouter } from "next/navigation";
import React from "react";
import { User } from "@/interfaces/User";

const Page = observer(() => {
  const router = useRouter();

  return (
    <div className="h-screen w-screen flex flex-col">
      <UserFilter />
      <div className="flex-1 flex justify-center items-center flex-col ">
        {userStore.participantUsers.length > 1 && (
          <button
            disabled={userStore.participantUsers.length < 2}
            onClick={() => {
              if (userStore.participantUsers.length > 1) {
                router.push("/game");
              }
            }}
            className="bg-green-500 text-white px-12 py-6 text-xl rounded hover:bg-green-600"
          >
            Start Game
          </button>
        )}
        {userStore.participantUsers.length > 0 && (
          <button
            onClick={() => {
              userStore.reset();
            }}
            className="mt-5 bg-blue-500 text-white px-12 py-6 text-xl rounded hover:bg-blue-600"
          >
            Reset Game
          </button>
        )}
      </div>
    </div>
  );
});

export default Page;
