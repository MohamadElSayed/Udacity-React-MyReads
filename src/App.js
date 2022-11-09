import "./App.css";
import BookCase from "./Components/BookCase";
import { Route, Routes } from "react-router-dom";
import BookSearch from "./Components/BookSearch/BookSearch";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<BookCase />} />
      <Route path="/search" element={<BookSearch />} />
    </Routes>
  );
};

export default App;
