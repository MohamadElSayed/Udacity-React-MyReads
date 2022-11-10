import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as BooksAPI from "../../api/BooksAPI";
import ListBooks from "../ListBooks/ListBooks";
import PropTypes from "prop-types";

const BookSearch = ({ bookCase, onBookShelfChange }) => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  const getBooksSearch = async (searchText) => {
    const bookslist = await BooksAPI.search(searchText, 100);
    return bookslist;
  };

  useEffect(() => {
    const handleSearchChange = async () => {
      let bookslist = await getBooksSearch(search);

      if (Array.isArray(bookslist) && bookslist.length > 0) {
        bookslist.forEach((book) => {
          if (bookCase.filter((b) => b.id === book.id).length === 1) {
            book.shelf = bookCase.filter((b) => b.id === book.id)[0].shelf;
          }
        });
        setBooks(bookslist);
      } else {
        setBooks([]);
      }
    };
    handleSearchChange();
  }, [bookCase, search]);

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
        <ListBooks books={books} onBookShelfChange={onBookShelfChange} />
      </div>
    </div>
  );
};

export default BookSearch;

BookSearch.prototypes = {
  bookCase: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onBookShelfChange: PropTypes.func.isRequired,
};
