import React from 'react';
import Book from './Book';

const BookList = ({ books, onDelete }) => (
  <ul className="book__list">
    {
      books.map( book =>
        <li id={book.id} key={book.id} className="book__item">
          <Book {...book} onDelete={onDelete} />
        </li>
      )
    }
  </ul>
);

export default BookList;
