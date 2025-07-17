function printInfo(library) {
  for (var i in library.books) {
    console.log(library.books[i].title);
  }
}

const library = {
  books: [
    { title: "Clean Code", author: "Robert C. Martin", year: 2008 },
    { title: "The Pragmatic Programmer", author: "Andrew Hunt", year: 1999 },
    { title: "You Dont Know JS", author: "Kyle Simpson", year: 2014 },
  ],
};
printInfo(library);
