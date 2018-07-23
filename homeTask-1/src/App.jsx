import React, { Component } from 'react';
import v4 from 'uuid/v4';
import SearchBar from './SearchBar';
import BookEditor from './BookEditor';
import BookList from './BookList';
import Books from './Book';
import { getVisibleBooks } from './services/selector';

console.log(v4());
export default class App extends Component {
  state = {
    books: Books,
    filter: '',
  };

  addBook = data => {
    const book = {
      id: v4(),
      author: '',
      descr: '',
      img: '',
      title: '',
    };

    this.setState(prevState => ({
      books: [book, ...prevState.books],
    }));
  };

  deleteBook = id => {
    this.setState(prevState => ({
      books: prevState.books.filter( book => book.id !== id ),
    }))
  };

  changeFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

  render() {
    const { books, filter } = this.state;

    const visibleBooks = getVisibleBooks(books, filter);

    return (
      <div>
        <SearchBar value={filter} onChange={this.changeFilter} />
        <BookEditor onSubmit={this.addBook} />
        <BookList  books={visibleBooks} onDelete={this.deleteNote} />
      </div>
    )
  }
}
