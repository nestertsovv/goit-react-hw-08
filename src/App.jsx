import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { Loader } from "components";
import { PrivateRoute } from "./routes/PrivateRoute";
import { Layout } from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import { RestrictedRoute } from "./routes/RestrictedRoute";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";

import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import "./styles/reset.css";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      <Route
        path="/login"
        element={
          <RestrictedRoute>
            <Layout />
          </RestrictedRoute>
        }
      >
        <Route index element={<LoginPage />} />
      </Route>

      <Route
        path="/register"
        element={
          <RestrictedRoute>
            <Layout />
          </RestrictedRoute>
        }
      >
        <Route index element={<RegistrationPage />} />
      </Route>

      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
