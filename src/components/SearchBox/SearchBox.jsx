import { useDispatch } from "react-redux";

import { changeFilter } from "../../redux/filters/slice";
import s from "./SearchBox.module.css";

export const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.wrapper}>
      <span>Find contacts by name</span>
      <input
        type="search"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        placeholder="Enter name or number"
      />
    </div>
  );
};
