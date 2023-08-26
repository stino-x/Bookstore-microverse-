import React, { useContext, useState } from 'react';
import './form.css';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import SharedStateContext from '../../ContextProvider';
import { addBooks } from '../../redux/books/booksSlice';

export default function Form() {
  const { createBook } = useContext(SharedStateContext);
  const [Bookname, setBookName] = useState('');
  const [Author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleBookname = (event) => {
    setBookName(event.target.value);
  };

  const handleAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (Bookname && Author !== '') {
      const book = createBook(Bookname, Author, nanoid());
      dispatch(addBooks(book));
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
    // <form action="" method="post">
    //   <input type="text" className="form-title" placeholder="Title" />
    //   <input type="text" className="form-author" placeholder="Author" />
    //   <input type="button" value="ADD BOOK" />
    // </form>
  );
}
