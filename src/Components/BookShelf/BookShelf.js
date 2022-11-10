import PropTypes from "prop-types";
import ListBooks from "../ListBooks/ListBooks";

export const shelves = () => {
  return [
    { id: 1, name: "Currently Reading", value: "currentlyReading" },
    { id: 2, name: "Want to Read", value: "wantToRead" },
    { id: 3, name: "Read", value: "read" },
    { id: 4, name: "None", value: "none" },
  ];
};

export const BookShelf = ({ books, onBookShelfChange, shelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf}</h2>
      <div className="bookshelf-books">
        <ListBooks books={books} onBookShelfChange={onBookShelfChange} />
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelf: PropTypes.string.isRequired,
  onBookShelfChange: PropTypes.func.isRequired,
};
