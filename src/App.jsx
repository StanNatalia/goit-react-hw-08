import css from "../src/App.module.css";

import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";

import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD

=======
import RegistrationForm from "./assets/pages/RegistrationPage/RegistrationForm";
import LoginForm from "./assets/pages/LoginPage/LoginForm";
import ContactPage from "./assets/pages/ContactPage/ContactPage";
>>>>>>> e67100ac78b198d23c28a73803ebbfe51030094f
import Layout from "./components/Layout/Layout";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";
import HomePage from "./pages/HomePage/HomePage";
<<<<<<< HEAD
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ContactPage from "./pages/ContactPage/ContactPage";
=======
>>>>>>> e67100ac78b198d23c28a73803ebbfe51030094f

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
          <Route path="/register" element={<RegistrationPage />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
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
