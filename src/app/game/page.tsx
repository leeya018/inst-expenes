"use client";

import RandomTaskSelector from "@/components/RandomTaskSelector";
import RandomUserSelector from "@/components/RandomUserSelector";
import taskStore from "@/stores/TaskStore";
import userStore from "@/stores/usersStore"; // Import MobX store for users
import BackButton from "@/ui/BackButton";
import { observer } from "mobx-react-lite";
import React from "react";

const MainPage: React.FC = observer(() => {
  const selectRandomTask = () => {
    taskStore.startTaskSelection(); // Use task store to start task selection
  };

  const selectRandomUser = () => {
    userStore.startUserSelection(); // Use user store to start user selection
  };

  return (
    <div className="h-screen w-screen flex flex-col p-10">
      <BackButton />
      <div className="h-[30vh] flex justify-center items-center flex-col">
        {userStore.participantUsers.length > 1 && (
          <RandomUserSelector selectedUser={userStore.selectedUser} />
        )}
        <RandomTaskSelector selectedTask={taskStore.selectedTask} />
      </div>
      <div className="flex-1 flex justify-center items-center ">
        <button
          onClick={() => {
            selectRandomUser();
            selectRandomTask();
          }}
          className="bg-green-500 text-white px-12 py-6 text-xl rounded hover:bg-green-600"
          disabled={userStore.isScrolling || taskStore.isScrolling}
        >
          Select Random
        </button>
      </div>
    </div>
  );
});

export default MainPage;
