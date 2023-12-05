class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  static usersAgesCompare(userA, userB) {
    if (userA.age > userB.age) {
      return userA.firstName + " è più vecchio di " + userB.firstName;
    } else if (userB.age > userA.age) {
      return userB.firstName + " è più vecchio di " + userA.firstName;
    } else {
      return userA.firstName + " e " + userA.firstName + " hanno la stessa età";
    }
  }
}
let utente1 = new User("Omar", "Lo Giudice", 31, "Casa mia");
let utente2 = new User("Antonio", "Rizzuti", 22, "Casa sua");
let utente3 = new User("Alessandro", "Tedde", 24, "Sardegna");

console.log(User.usersAgesCompare(utente2, utente3));
