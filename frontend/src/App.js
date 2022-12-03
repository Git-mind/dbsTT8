import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import ProEdit from "./ProfileEdit";

function App() {
  return (
    <div className="App">
      <h1>Test profile page</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />}></Route>

          <Route path="/profile/edit/:empid" element={<ProEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
