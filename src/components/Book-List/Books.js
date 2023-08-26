import React from 'react';
import './books.css';
import PropTypes from 'prop-types';

export default function Books({ BookArray }) {
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
Books.propTypes = {
  BookArray: PropTypes.arrayOf(
    PropTypes.shape({
      bookname: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
