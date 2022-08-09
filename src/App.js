import "./App.css";
import SignupPage from "./Components.js/Sprint1Signuppage";
import Loginpage from "./Components.js/Login";
import Dashboard from "./Components.js/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpage />}></Route>
          <Route path="/Signup" element={<SignupPage />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
