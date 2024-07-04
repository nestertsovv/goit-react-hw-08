import clsx from "clsx";

import s from "./CustomBtn.module.css";

export const CustomBtn = ({ customClass, ...props }) => (
  <button
    className={clsx(s.defaultBtn, customClass && s[customClass])}
    {...props}
  />
);
