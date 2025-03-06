import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./RegistrationForm.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { registerThunk } from "../../redux/auth/operations";

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

  const onlyLetter = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;

  const applySchema = Yup.object().shape({
    name: Yup.string()
      .required("this field is required")
      .min(2, "at least 2 letters")
      .max(20, "maximum 20 letters")
      .matches(onlyLetter, "Only letters"),
    email: Yup.string()
      .required("this field is required")
      .email("Invalid email format"),
    password: Yup.string()
      .required("this field is required")
      .min(6, "at least 6 signs"),
  });

  return (
    <div className={css.formWrapper}>
      <Formik
        validationSchema={applySchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={css.form}>
            <label className={css.label}>
              <span className={css.span}>Name:</span>
              <Field className={css.field} name="name" />
              <ErrorMessage className={css.error} name="name" component="p" />
            </label>
            <label className={css.label}>
              <span className={css.span}>Email:</span>
              <Field className={css.field} name="email" type="email" />
              <ErrorMessage className={css.error} name="email" component="p" />
            </label>
            <label className={css.label}>
              <span className={css.span}>Password:</span>
              <Field className={css.field} name="password" type="password" />
              <ErrorMessage
                className={css.error}
                name="password"
                component="p"
              />
            </label>
            <button type="submit" className={css.btn}>
              Register
            </button>
            <div className={css.tumb}>
              <p>You already have account?</p>
              <Link className={css.link} to="/login">
                Get it
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
