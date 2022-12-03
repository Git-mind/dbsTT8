import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import NewScheduleTxn from "./pages/NewScheduleTxn";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NewScheduleTxn />} />
      </Routes>
    </div>
  );
}

export default App;
