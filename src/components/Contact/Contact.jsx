import css from "./Contact.module.css";
import { FaUserAlt } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { deleteContacts } from "../../redux/contactsOps";
import { selectContacts } from "/src/redux/contactsSlice.js";

export default function Contact({ id }) {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const contact = contacts.find((contact) => contact.id === id);

  return (
    <div className={css.item}>
      <div className={css.itemWrapper}>
        <div className={css.itemInfo}>
          <FaUserAlt className={css.userIcon} />
          <p className={css.itemName}>{contact.name}</p>
        </div>
        <div className={css.itemInfo}>
          <BsTelephoneFill className={css.userIcon} />
          <p className={css.itemName}>{contact.number}</p>
        </div>
      </div>

      <button
        onClick={() => dispatch(deleteContacts(id))}
        className={css.itemBtn}
      >
        Delete
      </button>
    </div>
  );
}
