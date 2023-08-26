import React from 'react';
import './books.css';
import { useDispatch, useSelector } from 'react-redux';
import { displayObject } from '../../redux/books/booksSlice';

export default function Books() {
  const dispatch = useDispatch();
  const booksstore = useSelector((state) => state.books.books);
  const displayStorevariables = () => {
    dispatch(displayObject());
  };
  return (
    <div className="list-container">
      <ul className="Booklist">
        {Array.isArray(booksstore) ? (
          booksstore.map((book) => (
            <li key={book.itemid} className="book">
              <h3>
                Title:
                {book.title}
              </h3>
              <h3>
                Author:
                {book.author}
              </h3>
            </li>
          ))
        ) : (
          displayStorevariables()
        )}
      </ul>
    </div>
  );
}
