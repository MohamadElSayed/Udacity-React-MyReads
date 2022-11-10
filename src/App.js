import "./App.css";
import BookCase from "./Components/BookCase";
import { Route, Routes } from "react-router-dom";
import BookSearch from "./Components/BookSearch/BookSearch";
import { useEffect, useState } from "react";
import * as BooksAPI from "./api/BooksAPI";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getAllBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getAllBooks();
  }, []);

  const handleBookShelfChange = (book) => {
    let restBooks = books.filter((b) => b.id !== book.id);
    setBooks([...restBooks, book]);
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <BookCase books={books} onBookShelfChange={handleBookShelfChange} />
        }
      />
      <Route
        path="/search"
        element={
          <BookSearch
            bookCase={books}
            onBookShelfChange={handleBookShelfChange}
          />
        }
      />
    </Routes>
  );
};

export default App;
