import { makeAutoObservable } from "mobx";
import { User } from "@/interfaces/User"; // Adjust path if necessary
import { usersData } from "@/util"; // Assuming this contains the initial user data

class UserStore {
  users: User[] = usersData;
  participantUsers: User[] = [];
  selectedUser: User | null = null;
  isScrolling: boolean = false;
  constructor() {
    // MobX will automatically make observables, actions, etc.
    makeAutoObservable(this);
  }

  startUserSelection() {
    this.isScrolling = true;
    let scrollIndex = 0;

    const interval = setInterval(() => {
      scrollIndex = (scrollIndex + 1) % this.participantUsers.length;
      this.selectedUser = this.participantUsers[scrollIndex];
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      const randomIndex =
        Math.floor(Math.random() * (this.participantUsers.length - 1)) + 1;
      this.selectedUser = this.participantUsers[randomIndex];
      this.isScrolling = false;
    }, 3000);
  }

  // Action to add user to participantUsers and remove them from users
  addParticipant(user: User) {
    if (!this.participantUsers.find((u) => u.id === user.id)) {
      this.participantUsers.push(user);
      this.users = this.users.filter((u) => u.id !== user.id); // Remove user from users
    }
  }

  // Action to remove a participant and add them back to the users list
  removeParticipant(user: User) {
    this.participantUsers = this.participantUsers.filter(
      (u) => u.id !== user.id
    );
    this.users.push(user); // Add the user back to the users list
  }

  // Action to reset both users and participantUsers
  reset() {
    this.users = [...usersData];
    this.participantUsers = [];
  }
}

// Create a singleton instance of the store
const userStore = new UserStore();
export default userStore;
