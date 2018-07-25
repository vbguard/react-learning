import React, { Component } from 'react';
import v4 from 'uuid/v4';
import Books from './backend/books.json';
import SearchBar from './SearchBar';
import BookEditor from './BookEditor';
import BookList from './BookList';
import { getVisibleBooks } from './services/selector';

const getDataBooks = Books;
export default class App extends Component {
  state = {
    books: getDataBooks,
    filter: '',
  };

  addBook = ({title, descr, img, author}) => {
    const book = {
      id: v4(),
      author: author,
      descr: descr,
      img: img,
      title: title,
    };

    this.setState(prevState => ({
      books: [book, ...prevState.books],
    }));
    console.log('after add new books: ', this.state.books);
  };

  deleteBook = id => {
    this.setState(prevState => ({
      books: prevState.books.filter( book => book.id !== id ),
    }));
  };

  changeFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

  render() {
    const { books, filter } = this.state;

    const visibleBook = getVisibleBooks(books, filter);

    return (
      <section className="book wrapper">
        <SearchBar value={filter} onChange={this.changeFilter} />
        <BookEditor onSubmit={this.addBook} />
        <BookList  books={visibleBook} onDelete={this.deleteBook} />
      </section>
    )
  }
}
