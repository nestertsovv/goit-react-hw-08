import { CustomNavLink } from "components";
import s from "./UserMenu.module.css";
import { logoutUser } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

export const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <>
      <li>
        <CustomNavLink path="/contacts">Contacts</CustomNavLink>
      </li>
      <li>
        <button className={s.btn} onClick={() => dispatch(logoutUser())}>
          Logout
        </button>
      </li>
    </>
  );
};
