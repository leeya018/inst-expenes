import { Task } from "@/interfaces/Task";
import { tasks } from "@/util";
import { useState } from "react";

const RandomTaskSelector: React.FC = () => {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

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

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">
        {selectedTask ? selectedTask.title : "No task selected"}
      </h1>
      <button
        onClick={selectRandomTask}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        disabled={isScrolling}
      >
        Select Random Task
      </button>
    </div>
  );
};

export default RandomTaskSelector;
