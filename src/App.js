import "./App.css";
import SignupPage from "./Components.js/Sprint1Signuppage";
import Loginpage from "./Components.js/Login";
import Dashboard from "./Components.js/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Publicroutes from "./Components.js/Authentication/publicroutes";
import Protectedroutes from "./Components.js/Authentication/protectedroutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Publicroutes component={Loginpage} />}
          ></Route>
          <Route
            path="/Signup"
            element={<Publicroutes component={SignupPage} />}
          ></Route>
          <Route
            path="/Dashboard"
            element={<Protectedroutes component={Dashboard} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
