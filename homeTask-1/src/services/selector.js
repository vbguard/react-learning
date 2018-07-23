export const getVisibleBooks = (allBooks, filter) =>
  allBooks.filter(book => book.text.toLowerCase().includes(filter.toLowerCase()));
