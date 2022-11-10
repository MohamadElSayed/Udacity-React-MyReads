import { shelves } from "../../../BookShelf/BookShelf";
import PropTypes from "prop-types";

const NewBookMenu = ({ onShelfSelection }) => {
  const handleShelfSelection = (e, newShelf) => {
    e.preventDefault();
    onShelfSelection(newShelf);
  };

  return (
    <div className="book-shelf-changer">
      <select
        onChange={(e) => handleShelfSelection(e, e.target.value)}
        value={"none"}
      >
        <option disabled>Add to...</option>

        {shelves().map((s) => {
          return (
            <option key={s.id} value={s.value}>
              {s.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default NewBookMenu;

NewBookMenu.propTypes = {
  onShelfSelection: PropTypes.func.isRequired,
};
