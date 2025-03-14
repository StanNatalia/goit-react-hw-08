import css from "../src/App.module.css";

import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";

import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";
import HomePage from "./pages/HomePage/HomePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ContactPage from "./pages/ContactPage/ContactPage";

function App() {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? null : (
    <div className={css.container}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute>
                <RegistrationPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>
            }
          />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
