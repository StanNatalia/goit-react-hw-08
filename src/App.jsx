import css from "../src/App.module.css";

import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";

import { fetchContacts } from "./redux/contacts/operations";
import { Route, Routes } from "react-router-dom";
import RegistrationForm from "./assets/pages/RegistrationPage/RegistrationForm";
import LoginForm from "./assets/pages/LoginPage/LoginForm";
import ContactPage from "./assets/pages/ContactPage/ContactPage";
import Layout from "./components/Layout/Layout";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? null : (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactPage />
              </PrivateRoute>
            }
          />
          <Route path="/register" element={<RegistrationForm />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginForm />}
                redirectTo="/contacts"
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
