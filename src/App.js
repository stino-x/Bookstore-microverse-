import React, { useState } from 'react';
import {
  Route, RouterProvider, createBrowserRouter, createRoutesFromElements,
} from 'react-router-dom';
import BookLayout from './components/BookLayout';
import Form from './components/Form/Form';
import Books from './components/Book-List/Books';

function App() {
  const [BookArray, setBookArray] = useState([]);
  const [Bookname, setBookName] = useState('');
  const [Author, setAuthor] = useState('');

  const createBook = (bookname, author) => {
    const newBook = {
      bookname,
      author,
    };

    setBookArray([...BookArray, newBook]);

    return newBook;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<BookLayout />}>
        <Route index element={<Books BookArray={BookArray} />} />
        <Route
          path="form"
          element={(
            <Form
              BookArray={BookArray}
              createBook={createBook}
              Bookname={Bookname}
              setBookName={setBookName}
              Author={Author}
              setAuthor={setAuthor}
            />
)}
        />
      </Route>,
    ),
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
