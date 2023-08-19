import React from 'react';
import './form.css';
import PropTypes from 'prop-types';

export default function Form({
  BookArray, createBook, Bookname, setBookName, Author, setAuthor,
}) {
  const handleBookname = (event) => {
    setBookName(event.target.value);
  };

  const handleAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (Bookname && Author !== '') {
      const book = createBook(Bookname, Author);
      BookArray.push(book);
      setBookName('');
      setAuthor('');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <input
          className="Book-name"
          value={Bookname}
          onChange={handleBookname}
          type="text"
          placeholder="Title"
        />
        <input
          className="Author"
          value={Author}
          onChange={handleAuthor}
          type="text"
          placeholder="Author"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

Form.propTypes = {
  BookArray: PropTypes.arrayOf(
    PropTypes.shape({
      bookname: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  createBook: PropTypes.func.isRequired,
  Bookname: PropTypes.string.isRequired,
  setBookName: PropTypes.func.isRequired,
  Author: PropTypes.string.isRequired,
  setAuthor: PropTypes.func.isRequired,
};
