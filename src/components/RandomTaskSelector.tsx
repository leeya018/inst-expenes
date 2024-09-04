import { Task } from "@/interfaces/Task";
import { tasks } from "@/util";
import { useState } from "react";

type RandomTaskSelector = {
  selectedTask: Task | null;
};

const RandomTaskSelector: React.FC<RandomTaskSelector> = ({ selectedTask }) => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">
        {selectedTask ? selectedTask.title : "No task selected"}
      </h1>
    </div>
  );
};

export default RandomTaskSelector;
