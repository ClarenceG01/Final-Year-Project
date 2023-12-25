import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/request-access/Signup";
import Dashboard from "./pages/admin/Dashboard";
import Home from "./components/home/Home";
import Users from "./components/users/Users";
import Requests from "./components/requests/Requests";
import Settings from "./components/settings/Settings";
import Result from "./components/results/Result";
import ChangePassword from "./pages/changepwd/ChangePassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Student from "./components/students/Student";
import Dash from "./pages/user/Dash";
import Userhome from "./components/userhome/Userhome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* admin dashboard */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/" element={<Home />} />
          <Route path="/dashboard/users" element={<Users />} />
          <Route path="/dashboard/requests" element={<Requests />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/dashboard/results" element={<Result />} />
          <Route path="/dashboard/students" element={<Student />} />
        </Route>
        <Route path="/home" element={<Users />} />
        <Route path="/changepwd" element={<ChangePassword />} />
        {/* user dashboard */}
        <Route path="/user/dashboard" element={<Dash />}>
          <Route path="/user/dashboard/" element={<Userhome />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </BrowserRouter>
  );
}

export default App;
