import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className={css.wrapper}>
<<<<<<< HEAD
      {user.name && <h3>{user.name}</h3>}
=======
      {user?.name && <h3>{user.name}</h3>}
>>>>>>> e67100ac78b198d23c28a73803ebbfe51030094f
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
