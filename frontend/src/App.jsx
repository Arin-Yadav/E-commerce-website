import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  RouteAbout,
  RouteCart,
  RouteCollection,
  RouteContact,
  RouteIndex,
  RouteLogin,
  RoutePlaceOrders,
  RouteProduct,
  RouteSignup,
} from "./helpers/RouteName";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Sidbar from "./components/Sidbar";
import Signup from "./pages/Signup";

const App = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      {/* Navbar will always be visible on every routes */}
      <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} /> 
      <Sidbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Routes>
        <Route index path={RouteIndex} element={<Home />} />
        <Route index path={RouteCollection} element={<Collection />} />
        <Route index path={RouteAbout} element={<About />} />
        <Route index path={RouteCart} element={<Cart />} />
        <Route index path={RouteContact} element={<Contact />} />
        <Route index path={RoutePlaceOrders} element={<PlaceOrder />} />
        <Route index path={RouteProduct()} element={<Product />} />
        <Route index path={RouteLogin} element={<Login />} />
        <Route index path={RouteSignup} element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
