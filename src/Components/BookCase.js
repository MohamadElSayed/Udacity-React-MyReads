import { useEffect, useState } from "react";
import * as BooksAPI from "../api/BooksAPI";
import { Link } from "react-router-dom";
import { shelves, BookShelf } from "./BookShelf/BookShelf";

const BookCase = () => {
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

    shelves().filter((s) => s.value === book.shelf).length > 0
      ? setBooks([...restBooks, book])
      : setBooks([...restBooks]);
  };

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves().map((s) => {
            return (
              <BookShelf
                key={s.id}
                books={books.filter(
                  (b) => b.shelf.toLowerCase() === s.value.toLowerCase()
                )}
                onBookShelfChange={handleBookShelfChange}
                shelf={s.name}
              />
            );
          })}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default BookCase;
