import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./components/admin/Dashboard";
import LogInModal from "./components/modals/LogInModal";
import About from "./pages/About";


function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/login" element={<LogInModal/>} />
      <Route path="/about" element={<About/>} />
      <Route path="*" element={<Home/>} />
    </Routes>
  );
}

export default Router;
