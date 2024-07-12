import { Route, Routes } from "react-router-dom";
import "./App.css";
// Example of importing Bootstrap CSS in index.js or App.js
import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from "./components/auth/Login.jsx";
import { Register } from "./components/auth/Register.jsx";
import { ApplicationViews } from "./views/ApplicationViews.jsx";
import { Authorized } from "./views/Authorized.jsx";

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="*"
        element={
          // check if the user is authorized
          <Authorized>
            {/* // if the user is authorized, render the ApplicationViews component */}
            <ApplicationViews />
          </Authorized>
        }
      />
    </Routes>
  );
};
