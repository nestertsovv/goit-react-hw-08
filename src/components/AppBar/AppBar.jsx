import { useSelector } from "react-redux";
import clsx from "clsx";

import { UserMenu, AuthNav, CustomNavLink } from "components";

import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import s from "./AppBar.module.css";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const username = user.name || "Anonym";

  return (
    <header className={clsx(s.header, isLoggedIn && s.isLoggedIn)}>
      <h3 className={s.name}>Welcome, {username}!</h3>
      <ul className={s.list}>
        <li>
          <CustomNavLink path="/">Home</CustomNavLink>
        </li>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </ul>
    </header>
  );
};
