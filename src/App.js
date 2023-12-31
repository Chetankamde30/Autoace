import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
//import { Navigationbar } from "./components/Navigationbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import Services from "./components/Services";
import Newregistration from "./components/NewRegistration";
//import adminRegistration from "./components/AdminRegistration";
import AdminRegistration from "./components/AdminRegistration";
import Login from "./components/Login";
import Adminlogin from "./components/Adminlogin";
import Footer from "./components/Footer/Footer";
import AdminPage from "./components/AdminPanel/AdminPage";
import UserPage from"./components/UserPanel/UserPage";
import UserFeedback from "./components/UserPanel/UserFeedback";
import ViewContact from "./components/AdminPanel/ViewContact";

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/AdminPage" element={<AdminPage />}></Route>
        <Route path="/Newregistration" element={<Newregistration />}></Route>
        <Route path="/Newregistration" element={<Newregistration />}></Route>
        <Route path="/AdminRegistration" element={<AdminRegistration />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Adminlogin" element={<Adminlogin />}></Route>
      </Routes>

      <Routes>
       <Route path="/AdminPage" element={<AdminPage />}></Route>
       <Route path="/ViewContact" element={<ViewContact/>}></Route>
      </Routes>

      <Routes>
      <Route path="/UserPage" element={<UserPage />}></Route>
      <Route path="/UserFeedback" element={<UserFeedback />}></Route>
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
