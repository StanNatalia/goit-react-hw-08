import { useDispatch } from "react-redux";
import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addContacts } from "../../redux/contactsOps";

const ContactForm = () => {
  const initialValues = { contacts: "" };
  const dispatch = useDispatch();
  const onSubmit = (values, options) => {
    const newObj = {
      id: crypto.randomUUID(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContacts(newObj));
    options.resetForm();
  };
  const onlyLetter = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;
  const onlySigns = /^\d+$/;

  const applySchema = Yup.object().shape({
    name: Yup.string()
      .required("this field is required")
      .min(2, "at least 2 letters")
      .max(20, "maximum 20 letters")
      .matches(onlyLetter, "Only letters"),
    number: Yup.string()
      .required("this field is required")
      .min(7, "at least 7 signs")
      .matches(onlySigns, "Only signs"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={applySchema}
      >
        {() => (
          <Form className={css.form}>
            <label className={css.label} htmlFor="name">
              Name<Field name="name" id="name" className={css.field}></Field>
              <ErrorMessage className={css.error} name="name" component="p" />
            </label>

            <label className={css.label} htmlFor="number">
              Number
              <Field name="number" id="number" className={css.field}></Field>
              <ErrorMessage className={css.error} name="number" component="p" />
            </label>

            <button type="submit" className={css.btn}>
              Add contacts
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
