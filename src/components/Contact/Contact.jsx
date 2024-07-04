import { useDispatch } from "react-redux";
import { TiUser, TiPhone } from "react-icons/ti";

import { ModalConfirm, CustomBtn } from "components";

import {
  setContactForDelete,
  setCurrentContact,
} from "../../redux/contacts/slice";
import s from "./Contact.module.css";

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => {
    document.getElementById("confirm_modal").showModal();
    dispatch(setContactForDelete(contact));
  };

  return (
    <>
      <div>
        <span className={s.spanName}>
          <TiUser />
          {contact.name}
        </span>
        <span className={s.spanName}>
          <TiPhone />
          {contact.number}
        </span>
      </div>
      <div className={s.btnWrapper}>
        <CustomBtn
          customClass="editBtn"
          onClick={() => dispatch(setCurrentContact(contact))}
        >
          Edit
        </CustomBtn>
        <CustomBtn customClass="deleteBtn" onClick={onDeleteContact}>
          Delete
        </CustomBtn>

        <ModalConfirm />
      </div>
    </>
  );
};
