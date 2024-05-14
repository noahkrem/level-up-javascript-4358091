class Movie {

  constructor(Title, Director, Genre, Release_Year, Rating) {
    this.Title = Title;
    this.Director = Director;
    this.Genre = Genre;
    this.Release_Year = Release_Year;
    this.Rating = Rating;
  }

  getOverview() {
    return `${this.Title}, a ${this.Genre} film directed by ${this.Director} was released in ${this.Release_Year}.
      it received a rating of ${this.Rating}.`;
  }
}


// Testing
const Spiderman = new Movie("Spiderman", "Sam Raimi", "Action", 2002, 87);
const Batman = new Movie("The Dark Knight", "Christopher Nolan", "Action", 2008, 83);

console.log(Spiderman);
console.log(Spiderman.getOverview());
console.log(Batman.getOverview());