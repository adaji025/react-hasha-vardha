import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import CustomersList from "./components/MainContent/CustomersList";
import Navbar from "./components/Navbar/Navbar";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import NoMatchFound from "./NoMatchFound";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index  element={<Login />} />
          <Route path="cart"  element={<ShoppingCart />} />
          <Route path="customers" element={<CustomersList />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatchFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
