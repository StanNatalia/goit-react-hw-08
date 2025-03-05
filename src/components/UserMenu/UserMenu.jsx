import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operation";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div>
      {user.name && <h3>{user.email}</h3>}
      <button
        className={css.btn}
        type="button"
        onClick={() => dispatch(logoutThunk())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
