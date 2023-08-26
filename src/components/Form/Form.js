import React, { useContext, useState } from 'react';
import './form.css';
import SharedStateContext from '../../ContextProvider';

export default function Form() {
  const { BookArray, createBook } = useContext(SharedStateContext);
  const [Bookname, setBookName] = useState('');
  const [Author, setAuthor] = useState('');

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
