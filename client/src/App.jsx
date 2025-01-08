import  { useState, useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true); // রাউট পরিবর্তনের সময় লোডিং শুরু
    const timeout = setTimeout(() => {
      setLoading(false); // রাউট লোড হয়ে গেলে লোডিং বন্ধ
    }, 1000); // এখানে ৫০০ms সময় দেওয়া হয়েছে

    return () => clearTimeout(timeout); // ক্লিনআপ
  }, [location]);

  return (
    <div>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
         
          <div className="loader"></div>
        </div>
      )}
      <Outlet />
    </div>
  );
}

export default App;





































/*import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Categories from "./pages/Categories"

import Contact from "./pages/Contact"
import Nav from "./components/Nav"
import Footer from "./components/Footer"


import OrderForm from "./pages/Order"
import AdminDashboard from "./components/Admin"
import Productdetails from "./pages/Productdetails"


const App = () => {

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:-[11vw]">
      <Nav/>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/categories"element={<Categories/>}/>
        <Route path="/orders"element={<OrderForm/>}/>
        <Route path="/contact"element={<Contact/>}/>
        <Route path="/details"element={<Productdetails/>}/>
        <Route path="/admin"element={<AdminDashboard/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
*/