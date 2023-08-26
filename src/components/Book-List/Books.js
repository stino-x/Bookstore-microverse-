import React, { useEffect } from 'react';
import './books.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook, fetchBook } from '../../redux/books/booksSlice';

export default function Books() {
  const dispatch = useDispatch();
  const booksstore = useSelector((state) => state.books.books);
  useEffect(() => {
    dispatch(fetchBook());
  }, [dispatch]);
  const deleteBookfunc = (ID) => {
    dispatch(deleteBook(ID));
  };
  return (
    <div className="list-container">
      <ul className="Booklist">
        {Array.isArray(booksstore) && booksstore.length > 0 ? (
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
              <button type="submit" onClick={() => deleteBookfunc(book.item_id)}>Remove</button>
            </li>
          ))
        ) : (
          <p>No books to display</p>
        )}
      </ul>
    </div>
  );
}
