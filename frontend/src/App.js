import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./Profile";
import ProEdit from "./ProfileEdit";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/profile/edit/:empid" element={<ProEdit />}></Route>
      </Routes>
    </div>
  );
}

export default App;
