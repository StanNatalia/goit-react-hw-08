import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { setFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();

  return (
    <div className={css.form}>
      <p className={css.label}>Find contacts by name</p>
      <input
        onChange={(e) => dispatch(setFilter(e.target.value))}
        className={css.field}
        type="text"
      />
    </div>
  );
}
