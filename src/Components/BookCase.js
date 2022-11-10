import { Link } from "react-router-dom";
import { shelves, BookShelf } from "./BookShelf/BookShelf";
import PropTypes from "prop-types";

const BookCase = ({ books, onBookShelfChange }) => {
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
                onBookShelfChange={onBookShelfChange}
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

BookCase.prototypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      shelf: PropTypes.string.isRequired,
    })
  ).isRequired,
  onBookShelfChange: PropTypes.func.isRequired,
};
