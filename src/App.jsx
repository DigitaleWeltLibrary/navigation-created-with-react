import React from "react";
import { About, Contact, Home, Product } from "./components/Pages/Pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.scss";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
