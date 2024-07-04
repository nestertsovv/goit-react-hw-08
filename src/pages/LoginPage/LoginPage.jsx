import { useId } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

import { loginUser } from "../../redux/auth/operations";
import s from "./LoginPage.module.css";

const initialValues = {
  email: "",
  password: "",
};

const contactsSchema = yup.object().shape({
  email: yup.string().email("Must be a valid email").required("Required!"),
});

const LoginPage = () => {
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const dispatch = useDispatch();

  const onSubmit = ({ email, password }, actions) => {
    const loginObj = {
      email,
      password,
    };

    dispatch(loginUser(loginObj));
    actions.resetForm();
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse min-w-[400px] my-4">
          <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={contactsSchema}
            >
              <Form className="card-body">
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
                    <span className="mr-1">Don't have an account?</span>
                    <Link
                      to="/register"
                      className="link link-hover text-[#E76F51]"
                    >
                      Register
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-4">
                  <button
                    type="submit"
                    className="btn login-btn bg-[#E76F51] border-[#E76F51] text-[16px] text-white"
                  >
                    Login
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

export default LoginPage;
