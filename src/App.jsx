import css from "../src/App.module.css";

import { useDispatch } from "react-redux";

import { useEffect } from "react";

import { fetchContacts } from "./redux/contacts/operations";
import { Route, Routes } from "react-router-dom";
import HomePage from "./assets/pages/HomePage/HomePage";
import RegistrationForm from "./assets/pages/RegistrationPage/RegistrationForm";
import LoginForm from "./assets/pages/LoginPage/LoginForm";
import ContactPage from "./assets/pages/ContactPage/ContactPage";
import Layout from "./components/Layout/Layout";
import { refreshUser } from "./redux/auth/operation";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contacts" element={<ContactPage />} />
        </Route>
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
