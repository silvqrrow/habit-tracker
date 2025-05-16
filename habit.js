const Habits = [];

class Habit {
  constructor(name, streak = 0, completed = false) {
    this.name = name;
    this.streak = streak;
    this.completed = completed;
  }

  toggleCompletion() {
    this.completed = !this.completed;
    return this.completed;
  }

  static resetDaily() {
    Habits.forEach((habit) => {
      habit.completed = false;
    });
    console.log("All habits have been reset for the day!");
  }
}

module.exports = { Habit, Habits };
