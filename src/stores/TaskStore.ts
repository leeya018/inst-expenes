import { makeAutoObservable } from "mobx";
import { tasks } from "@/util"; // Assuming tasks are imported from a utility file
import { Task } from "@/interfaces/Task";

class TaskStore {
  tasks: Task[] = tasks;
  selectedTask: Task | null = null;
  isScrolling: boolean = false;

  constructor() {
    makeAutoObservable(this); // Makes this MobX store reactive
  }

  // Start selecting a random task with a scrolling effect
  startTaskSelection() {
    if (this.tasks.length === 0) return; // Check if there are any tasks left

    this.isScrolling = true;
    let scrollIndex = 0;

    const interval = setInterval(() => {
      scrollIndex = (scrollIndex + 1) % this.tasks.length;
      this.selectedTask = this.tasks[scrollIndex];
    }, 100);

    setTimeout(() => {
      clearInterval(interval);

      // Randomly select a task from the remaining tasks
      const randomIndex = Math.floor(Math.random() * this.tasks.length);
      this.selectedTask = this.tasks[randomIndex];

      // Remove the selected task from the tasks array
      this.tasks = this.tasks.filter((_, index) => index !== randomIndex);

      this.isScrolling = false;

      // Optionally, you can handle an empty tasks array, like resetting or showing a message.
      if (this.tasks.length === 0) {
        console.log("No more tasks left!");
      }
    }, 2000);
  }

  reset() {
    this.tasks = [...tasks];
    this.selectedTask = null;
    this.isScrolling = false;
  }
}

const taskStore = new TaskStore();
export default taskStore;
