import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App"; // App.jsx ফাইল ইমপোর্ট
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import OrderForm from "./pages/Order";
import AdminDashboard from "./components/Admin";
import Productdetails from "./pages/Productdetails";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const RouterSetup = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* App.jsx কে প্যারেন্ট রুট হিসেবে যুক্ত করুন */}
        <Route path="/" element={<App />}>
          {/* Nav এবং Footer Home, Categories ইত্যাদির ভেতরে থাকবে */}
          <Route
            index
            element={
              <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[11vw]">
                <Nav />
                <Home />
                <Footer />
              </div>
            }
          />
          <Route
            path="/categories"
            element={
              <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[11vw]">
                <Nav />
                <Categories />
                <Footer />
              </div>
            }
          />
          <Route
            path="/orders"
            element={
              <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[11vw]">
                <Nav />
                <OrderForm />
                <Footer />
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[11vw]">
                <Nav />
                <Contact />
                <Footer />
              </div>
            }
          />
          <Route
            path="/details"
            element={
              <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[11vw]">
                <Nav />
                <Productdetails />
                <Footer />
              </div>
            }
          />
          <Route
            path="/admin"
            element={
              <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[11vw]">
                <Nav />
                <AdminDashboard />
                <Footer />
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterSetup;




































































/*import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Categories from "./pages/Categories";
import App from "./App";
import Contact from "./pages/Contact"
import Nav from "./components/Nav"
import Footer from "./components/Footer"


import OrderForm from "./pages/Order"
import AdminDashboard from "./components/Admin"
import Productdetails from "./pages/Productdetails"


const RouterSetup = () => {

  return (

    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default RouterSetup
*/