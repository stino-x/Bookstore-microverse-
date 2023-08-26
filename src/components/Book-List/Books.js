import React, { useContext } from 'react';
import './books.css';
import SharedStateContext from '../../ContextProvider';
// import { useSelector } from 'react-redux';
// import Form from '../Form/Form';

export default function Books() {
  const { BookArray } = useContext(SharedStateContext);
  return (
    <div className="list-container">
      <ul className="Booklist">
        {BookArray.map((book) => {
          const { bookname, author } = book;
          return (
            <li key={bookname} className="book">
              <h3>
                Title:
                {bookname}
              </h3>
              <h3>
                Author:
                {author}
              </h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
