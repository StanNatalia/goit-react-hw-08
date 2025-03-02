import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {filteredContacts.length ? (
        filteredContacts.map((contact) => (
          <li key={contact.id}>
            <Contact {...contact} />
          </li>
        ))
      ) : (
        <h2>No data received...</h2>
      )}
    </ul>
  );
}
