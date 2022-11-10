import PropTypes from "prop-types";
import { shelves } from "../../../BookShelf/BookShelf";

const ExistingBookMenu = ({ shelf, onShelfSelection }) => {
  const handleShelfSelection = (e, newShelf) => {
    e.preventDefault();
    onShelfSelection(newShelf);
  };

  return (
    <div className="book-shelf-changer">
      <select
        onChange={(e) => handleShelfSelection(e, e.target.value)}
        value={shelf}
      >
        <option value="none" disabled>
          Move to...
        </option>
        {shelves().map((s) => {
          return (
            <option key={s.id} value={s.value}>
              {s.name}
            </option>
          );
        })}
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default ExistingBookMenu;

ExistingBookMenu.propTypes = {
  shelf: PropTypes.string.isRequired,
  onShelfSelection: PropTypes.func.isRequired,
};
