import { Audio } from "react-loader-spinner";
import ContactForm from "../../../components/ContactForm/ContactForm";
import ContactList from "../../../components/ContactList/ContactList";
import SearchBox from "../../../components/SearchBox/SearchBox";
import css from "./ContactPage.module.css";
import { useSelector } from "react-redux";
import { selectError, selectLoading } from "../../../redux/contacts/selectors";

const ContactPage = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      )}
      {error && <h2>Something went wrong!</h2>}
      <ContactList />
    </div>
  );
};

export default ContactPage;
