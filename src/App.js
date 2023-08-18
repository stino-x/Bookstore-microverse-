import {
  Route, RouterProvider, createBrowserRouter, createRoutesFromElements,
} from 'react-router-dom';
import BookLayout from './components/BookLayout';
import { ContextProvider } from './ContextProvider';
import Form from './components/Form/Form';
import Books from './components/Book-List/Books';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<BookLayout />}>
        <Route index element={<Books />} />
        <Route path="form" element={<Form />} />
      </Route>,
    ),
  );

  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}

export default App;
