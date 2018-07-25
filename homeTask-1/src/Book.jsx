import React from 'react'

const Book = ({id, title, img, author, descr, onDelete}) => (
  <div className="book__card card">
    <img className="card__image" src={img} alt="Cover Book"/>
    <h2 className="card__title">{title}</h2>
    <h3 className="card__author">Author: {author}</h3>
    <p className="card__descr">{descr}</p>
    <button className="card__btn"
          onClick={()=>{onDelete(id)}}>
          Delete
    </button>
  </div>
)

export default Book;

