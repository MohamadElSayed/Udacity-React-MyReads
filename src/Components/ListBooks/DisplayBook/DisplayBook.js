import PropTypes from "prop-types";
import NewBookMenu from "./BookMenu/NewBookMenu";
import ExistingBookMenu from "./BookMenu/ExistingBookMenu";
import * as BooksAPI from "../../../api/BooksAPI";
import { shelves } from "../../BookShelf/BookShelf";

const DisplayBook = ({ book, onBookShelfChange }) => {
  const { authors, shelf, title, imageLinks } = book;

  const handleUpdateBookShelf = async (newShelf) => {
    if (newShelf !== book.shelf) {
      await BooksAPI.update(book, newShelf);
      let updatedBook = await BooksAPI.get(book.id);
      onBookShelfChange(updatedBook);
    }
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={
            imageLinks
              ? {
                  width: 128,
                  height: 188,
                  backgroundImage: `url("${imageLinks.smallThumbnail}")`,
                }
              : {
                  width: 128,
                  height: 188,
                }
          }
        ></div>
        {shelves().filter((s) => s.value === shelf).length > 0 ? (
          <ExistingBookMenu
            shelf={shelf}
            onShelfSelection={handleUpdateBookShelf}
          />
        ) : (
          <NewBookMenu onShelfSelection={handleUpdateBookShelf} />
        )}
      </div>
      <div className="book-title">{title}</div>
      {authors &&
        authors.map((author) => {
          return (
            <div key={author} className="book-authors">
              {author}
            </div>
          );
        })}
    </div>
  );
};

export default DisplayBook;

DisplayBook.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  onBookShelfChange: PropTypes.func.isRequired,
};
