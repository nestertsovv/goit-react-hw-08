import { useId } from "react";
import { useDispatch } from "react-redux";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import toast from "react-hot-toast";

import { addContact } from "../../redux/contacts/operations";
import s from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const contactsSchema = yup.object().shape({
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

export const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();
  const toastOptions = {
    position: "top-center",
  };

  const onSubmit = ({ name, number }, actions) => {
    const contactObj = {
      name,
      number,
    };

    dispatch(addContact(contactObj))
      .unwrap()
      .then(() => {
        toast.success("Contact has been added");
      })
      .catch((error) => {
        toast.error(error);
      });

    actions.resetForm();
  };

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={contactsSchema}
      >
        <Form className={s.form}>
          <div className={s.row}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field name="name" id={nameFieldId} placeholder="Enter a name" />
            <ErrorMessage className={s.error} name="name" component="span" />
          </div>

          <div className={s.row}>
            <label htmlFor={numberFieldId}>Number</label>
            <Field
              name="number"
              id={numberFieldId}
              placeholder="Enter the number"
            />
            <ErrorMessage className={s.error} name="number" component="span" />
          </div>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};
