// Write your code here

class Book {

  constructor(Title, Author, ISBN, numCopies) {
    this.Title = Title;
    this.Authot = Author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  get availability() {
    return this.getAvailability();
  }

  getAvailability() {
    if (this.numCopies == 0) {
      return "out of stock";
    }
    else if (this.numCopies < 10) {
      return "low stock";
    }
    else {
      return "in stock";
    }
  }

  sell(numSold) {
    this.numCopies -= numSold;
  }

  restock(numStocked) {
    this.numCopies += numStocked;
  }
}


// Testing
const HungerGames = new Book("Hunger Games", "Suzanne Collins", 123919, 5);
console.log(HungerGames.availability);

HungerGames.restock(12);
console.log(HungerGames.availability);

HungerGames.sell(17);
console.log(HungerGames.availability);