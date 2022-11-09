import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as BooksAPI from "../../api/BooksAPI";
import ListBooks from "../ListBooks/ListBooks";
import { shelves } from "../BookShelf/BookShelf";

const BookSearch = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  const getlistofBooks = async (bookSearch) => {
    let bookslist = await BooksAPI.search(bookSearch, 100);
    Array.isArray(bookslist) && bookslist.length > 0
      ? setBooks(bookslist)
      : setBooks([]);
  };

  useEffect(() => {
    getlistofBooks(search);
  }, [search]);

  const handleBookShelfChange = (book) => {
    if (shelves().filter((s) => s.value === book.shelf).length > 0) {
      let restBooks = books.filter((b) => b.id !== book.id);
      setBooks([...restBooks]);
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => {
              e.preventDefault();
              setSearch(e.target.value);
            }}
            value={search}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ListBooks books={books} onBookShelfChange={handleBookShelfChange} />
      </div>
    </div>
  );
};

export default BookSearch;
