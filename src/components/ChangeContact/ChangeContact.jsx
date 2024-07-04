import { useDispatch, useSelector } from "react-redux";
import { useId } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

import { selectCurrentContact } from "../../redux/contacts/selectors";
import { setCurrentContact } from "../../redux/contacts/slice";
import { editContact } from "../../redux/contacts/operations";

import s from "./ChangeContact.module.css";

const changeContactScheme = yup.object().shape({
  name: yup
    .string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required!"),
  number: yup
    .string()
    .matches(/((\d{3})(-\d{3})(-\d{4}))$/, "Format is 000-000-0000")
    .required("Required!"),
});

export const ChangeContact = () => {
  const dispatch = useDispatch();
  const currentContact = useSelector(selectCurrentContact);
  const nameFieldId = useId();
  const numberFieldId = useId();

  const onChangeContact = ({ name, number }, actions) => {
    console.log({ ...currentContact, name, number });
    dispatch(editContact({ ...currentContact, name, number }));
    actions.resetForm();
  };

  return (
    <div className={s.wrapper}>
      <Formik
        enableReinitialize
        initialValues={currentContact}
        onSubmit={onChangeContact}
        validationSchema={changeContactScheme}
      >
        <Form className={s.form}>
          <div className={s.row}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field name="name" id={nameFieldId} />
            <ErrorMessage className={s.error} name="name" component="span" />
          </div>
          <div className={s.row}>
            <label htmlFor={numberFieldId}>Number</label>
            <Field name="number" id={numberFieldId} />
            <ErrorMessage className={s.error} name="number" component="span" />
          </div>

          <div className={s.buttonsRow}>
            <button type="submit" className={s.btnSubmit}>
              Change
            </button>
            <button
              className={s.btnCancel}
              onClick={() => dispatch(setCurrentContact(null))}
            >
              Cancel
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
