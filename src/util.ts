import { Task } from "./interfaces/Task";
import { User } from "./interfaces/User";

export const users: User[] = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alice Johnson" },
  { id: 4, name: "Bob Brown" },
];

export const tasks: Task[] = [
  { id: 1, title: "Finish project report", completed: false },
  { id: 2, title: "Review pull requests", completed: true },
  { id: 3, title: "Team meeting at 3 PM", completed: false },
  { id: 4, title: "Prepare presentation slides", completed: true },
];

export const getDbUrl = () => {
  if (process.env.NODE_ENV) {
    return "https://console.firebase.google.com/u/0/project/apartments-invest/firestore";
  }
  return "https://console.firebase.google.com/u/0/project/dating-empire/firestore";
};

export const netlifyUrl = "https://app.netlify.com/sites/work-lee/deploys";
export const githubUrl = "https://github.com/leeya018/work";

const today = new Date();
export const curr_m = today.getMonth() + 1;
export const curr_y = today.getFullYear();
