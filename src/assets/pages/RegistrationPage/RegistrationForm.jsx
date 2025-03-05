import { Field, Form, Formik } from "formik";
import css from "./RegistrationForm.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../../redux/auth/operation";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    name: "",
    password: "",
  };
  const handleSubmit = (values, option) => {
    console.log(values);
    dispatch(registerThunk(values));
    option.resetForm();
  };
  return (
    <div className={css.formWrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <label className={css.label}>
            <span className={css.span}>Name:</span>
            <Field className={css.field} name="name" />
          </label>
          <label className={css.label}>
            <span className={css.span}>Email:</span>
            <Field className={css.field} name="email" />
          </label>
          <label className={css.label}>
            <span className={css.span}>Password:</span>
            <Field className={css.field} name="password" type="password" />
          </label>
          <button className={css.btn}>Register</button>
          <div className={css.tumb}>
            <p>You already have account?</p>
            <Link className={css.link} to="/login">
              Get it
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
