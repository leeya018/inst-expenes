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
    this.isScrolling = true;
    let scrollIndex = 0;

    const interval = setInterval(() => {
      scrollIndex = (scrollIndex + 1) % this.tasks.length;
      this.selectedTask = this.tasks[scrollIndex];
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      const randomIndex =
        Math.floor(Math.random() * (this.tasks.length - 1)) + 1;
      this.selectedTask = this.tasks[randomIndex];
      this.isScrolling = false;
    }, 2000);
  }
}

const taskStore = new TaskStore();
export default taskStore;
