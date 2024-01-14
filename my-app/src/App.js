
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./screens/Layout";
import Products from "./screens/products/Products";
import About from "./screens/About";
import Details from "./screens/details/Details";
import React from "react";
import {ProductsProvider} from "./providers/ProductsProvider";
import {CartProvider} from "./providers/CartProvider";


function App() {
  return (
      <CartProvider>
          <ProductsProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route element={<Products/>} path="/"></Route>
                        <Route element={<Details/>} path=":id"></Route>
                        <Route element={<About/>} path="/About"></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
          </ProductsProvider>
      </CartProvider>
  );
}

export default App;
