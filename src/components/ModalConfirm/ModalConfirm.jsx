import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import { CustomBtn } from "components";

import { deleteContact } from "../../redux/contacts/operations";
import { selectContactForDelete } from "../../redux/contacts/selectors";

export const ModalConfirm = () => {
  const dispatch = useDispatch();
  const contactForDelete = useSelector(selectContactForDelete);

  const onDeleteContact = () => {
    dispatch(deleteContact(contactForDelete.id))
      .unwrap()
      .then(() => {
        toast.success("Contact has been deleted!");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <>
      <dialog id="confirm_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">
            Are you sure you want to delete
            {contactForDelete && (
              <span className="text-[#E76F51]"> {contactForDelete?.name}</span>
            )}
            ?
          </h3>

          <div className="modal-action justify-center">
            <form method="dialog" className="flex gap-3">
              <CustomBtn customClass="deleteBtn" onClick={onDeleteContact}>
                Delete
              </CustomBtn>
              <CustomBtn>Cancel</CustomBtn>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
