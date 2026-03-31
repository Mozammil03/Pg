import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./components/admin/Dashboard";


function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="*" element={<Home/>} />
    </Routes>
  );
}

export default Router;
