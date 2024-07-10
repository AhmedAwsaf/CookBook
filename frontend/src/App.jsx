import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

import LoginPage from "./pages/Loginpage";
import CreateAccount from "./pages/CreateAccount";
import AdminPage from "./pages/AdminPage";
import EditProfilePage from "./pages/EditProfilePage";
import ProtectedPage from "./pages/ProtectedPage";
import Userprofilepage from "./pages/Userprofilepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/userprofile" element={<ProtectedPage />}>
          <Route path="/userprofile" element={<Userprofilepage />} />
          <Route
            path="/userprofile/editprofile"
            element={<EditProfilePage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
