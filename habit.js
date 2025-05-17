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
}

module.exports = Habit;
