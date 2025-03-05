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
            <Field name="name" />
          </label>
          <label className={css.label}>
            <span className={css.span}>Email:</span>
            <Field name="email" />
          </label>
          <label className={css.label}>
            <span className={css.span}>Password:</span>
            <Field name="password" type="password" />
          </label>
          <button className={css.btn}>Register</button>
          <p>
            You already have account?<Link to="/login">Get it</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
