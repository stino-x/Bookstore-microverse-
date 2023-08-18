import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const SharedStateContext = createContext();

export function ContextProvider({ children }) {
  const [BookArray, setBookArray] = useState([]);
  function createBook(property1, property2) {
    return { bookname: property1, author: property2 };
  }

  return (
    <SharedStateContext.Provider value={{
      BookArray, setBookArray, createBook,
    }}
    >
      {children}
    </SharedStateContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate children as a node (React node)
};

export default SharedStateContext;
