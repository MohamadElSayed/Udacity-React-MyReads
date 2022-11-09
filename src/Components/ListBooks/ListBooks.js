import DisplayBook from "./DisplayBook/DisplayBook";
import PropTypes from "prop-types";

const ListBooks = ({ books, onBookShelfChange }) => {
  return (
    <ol className="books-grid">
      {books.map((book) => {
        return (
          <li key={book.id}>
            <DisplayBook book={book} onBookShelfChange={onBookShelfChange} />
          </li>
        );
      })}
    </ol>
  );
};

export default ListBooks;

ListBooks.prototypes = {
  books: PropTypes.array.isRequired,
  onBookShelfChange: PropTypes.func.isRequired,
};
