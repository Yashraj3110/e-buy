import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import MainPage from "./main";
import AdminPage from "./Pages/Admin/admin";
import VendorPage from "./Pages/Admin/VendorPage";
import SellerPage from "./Pages/Admin/Seller";

import axios from "axios";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/HomePage" />} />
        <Route path="/HomePage" element={<MainPage />} />
        <Route path="/Admin" element={<AdminPage />} />
        <Route path="/Seller" element={<SellerPage />} />
        <Route path="/page" element={<VendorPage />} />
       
        
      </Routes>
    </Router>


  );
}

export default App;
