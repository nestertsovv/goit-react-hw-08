import { useId } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

import { registerUser } from "../../redux/auth/operations";
import s from "./RegistrationPage.module.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const registerSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required!"),
  email: yup.string().email("Must be a valid email").required("Required!"),
  password: yup
    .string()
    .min(8, "Minimum 8 symbols")
    .max(20, "Maximum 20 symbols")
    .required("Required!"),
});

const RegistrationPage = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const dispatch = useDispatch();

  const onSubmit = ({ name, email, password }, actions) => {
    const registerObj = {
      name,
      email,
      password,
    };

    dispatch(registerUser(registerObj));
    actions.resetForm();
  };

  return (
    <div>
      {/* <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={registerSchema}
      >
        <Form>
          <div className={s.row}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field name="name" id={nameFieldId} />
            <ErrorMessage className={s.error} name="name" component="span" />
          </div>
          <div className={s.row}>
            <label htmlFor={emailFieldId}>Email</label>
            <Field name="email" id={emailFieldId} />
            <ErrorMessage className={s.error} name="email" component="span" />
          </div>
          <div className={s.row}>
            <label htmlFor={passwordFieldId}>Password</label>
            <Field name="password" id={passwordFieldId} type="password" />
            <ErrorMessage
              className={s.error}
              name="password"
              component="span"
            />
          </div>
          <button className={s.btn} type="submit">
            Register
          </button>
        </Form>
      </Formik> */}

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse min-w-[400px] my-4">
          <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={registerSchema}
            >
              <Form className="card-body">
                <div className="form-control relative mb-3">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <Field
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    className="input input-bordered"
                    id={nameFieldId}
                    required
                  />
                  <ErrorMessage
                    className={s.error}
                    name="name"
                    component="span"
                  />
                </div>
                <div className="form-control relative mb-3">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered"
                    id={emailFieldId}
                    required
                  />
                  <ErrorMessage
                    className={s.error}
                    name="email"
                    component="span"
                  />
                </div>
                <div className="form-control relative mb-3">
                  <label className="label" htmlFor={passwordFieldId}>
                    <span className="label-text">Password</span>
                  </label>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    className="input input-bordered"
                    id={passwordFieldId}
                    required
                  />
                  <ErrorMessage
                    className={s.error}
                    name="password"
                    component="span"
                  />
                </div>
                <div className="form-control">
                  <label className="label justify-start">
                    <span className="mr-1">Already have an account?</span>
                    <Link
                      to="/login"
                      className="link link-hover text-[#E76F51]"
                    >
                      Login
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-4">
                  <button
                    type="submit"
                    className="btn login-btn bg-[#E76F51] border-[#E76F51] text-[16px] text-white"
                  >
                    Register
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
