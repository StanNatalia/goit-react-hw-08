import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>Welcome to Phonebook</h3>
      <ul className={css.info}>
        <p className={css.text}>-Add new contacts</p>
        <p className={css.text}>-Delete existing ones</p>
        <p className={css.text}>
          -Quickly find the people you need using the search function
        </p>
      </ul>
    </div>
  );
};

export default HomePage;
