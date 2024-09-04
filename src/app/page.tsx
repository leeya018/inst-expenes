"use client";

import RandomTaskSelector from "@/components/RandomTaskSelector";
import RandomUserSelector from "@/components/RandomUserSelector";
import { Task } from "@/interfaces/Task";
import { User } from "@/interfaces/User";
import { tasks, users } from "@/util";
import React, { useState } from "react";

export default function MainPage() {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isScrolling1, setIsScrolling1] = useState<boolean>(false);

  const selectRandomTask = () => {
    setIsScrolling(true);
    let scrollIndex = 0;

    const interval = setInterval(() => {
      scrollIndex = (scrollIndex + 1) % tasks.length;
      setSelectedTask(tasks[scrollIndex]);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      const randomIndex = Math.floor(Math.random() * (tasks.length - 1)) + 1;
      setSelectedTask(tasks[randomIndex]);
      setIsScrolling(false);
    }, 2000);
  };

  const selectRandomUser = () => {
    setIsScrolling1(true);
    let scrollIndex = 0;

    const interval = setInterval(() => {
      scrollIndex = (scrollIndex + 1) % users.length;
      setSelectedUser(users[scrollIndex]);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      const randomIndex = Math.floor(Math.random() * (users.length - 1)) + 1;
      setSelectedUser(users[randomIndex]);
      setIsScrolling1(false);
    }, 3000);
  };

  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="h-[30vh] flex justify-center items-center flex-col">
        <RandomUserSelector selectedUser={selectedUser} />
        <RandomTaskSelector selectedTask={selectedTask} />
      </div>
      <div className="flex-1 flex justify-center items-center border-2">
        <button
          onClick={() => {
            selectRandomUser();
            selectRandomTask();
          }}
          className="bg-green-500 text-white px-12 py-6 text-xl rounded hover:bg-green-600"
          disabled={isScrolling}
        >
          Select Random
        </button>
      </div>
    </div>
  );
}
