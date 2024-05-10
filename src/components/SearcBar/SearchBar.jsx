import { useDispatch, useSelector } from "react-redux";

import { changeFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";

import css from "./SearchBar.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilter);

  const onFilterChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div className={css.searchForm}>
      <label className={css.searchTitle}>
        Find contacts by name
        <input
          className={css.searchInput}
          type="text"
          placeholder="Search..."
          value={filters}
          onChange={onFilterChange}
        />
      </label>
    </div>
  );
};

export default SearchBar;
