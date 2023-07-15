import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

import { Login, Register, HomePage, DashboardPage, Admin, AdminDashboardPage } from "./pages";
import { checkIsLoggedIn } from "./redux/actionCreators/authActionCreator";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkIsLoggedIn());
  }, []);

  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element ={<Login/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/admindashboard" element={<AdminDashboardPage/>}/>
        <Route path="/dashboard/*" element={<DashboardPage />} />
      </Routes>
    </div>
  );
};

export default App;