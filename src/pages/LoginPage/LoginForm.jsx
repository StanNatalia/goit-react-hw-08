import { Field, Form, Formik } from "formik";
import css from "./LoginForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../../redux/auth/operation";
import toast from "react-hot-toast";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(loginThunk(values))
      .unwrap()
      .then((res) => {
        toast.success(`Welcome, ${res.user.email}`);
        navigate("/contacts", { replace: true });
      })
      .catch(() => toast.error("Invalid data"));
    options.resetForm();
  };

  return (
    <div className={css.formWrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <label className={css.label}>
            <span className={css.span}>Email:</span>
            <Field className={css.field} name="email" />
          </label>
          <label className={css.label}>
            <span className={css.span}>Password:</span>
            <Field className={css.field} name="password" type="password" />
          </label>
          <button type="submit" className={css.btn}>
            Login
          </button>
          <div className={css.tumb}>
            <p>You do not have account yet?</p>
            <Link className={css.link} to="/register">
              Get it
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
