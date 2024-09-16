import "./App.css";
import SignupPage from "./Components/Sprint1Signuppage";
import Loginpage from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Publicroutes from "./Components/Authentication/publicroutes";
import Protectedroutes from "./Components/Authentication/protectedroutes";
import CsvFileUpload from "./Components/csvfileupload";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CsvFileUpload />}></Route>
          {/* <Route
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
          ></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
