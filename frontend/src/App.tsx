import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./pages/Home/Home";
import Contact from "./pages/contact/Contact";
import Pricing from "./pages/pricing/Pricing";
import Product from "./pages/products/Product";
import SingleProduct from "./pages/products/product-details";
import Post from "./pages/Post/Post";
import PostDetails from "./pages/Post/PostDetail";
import About from "./pages/aboutus/About";
import PostDetailPage from "./pages/Post/PostDetail";
import Signin from "./pages/signin/Signin";
import Register from "./pages/register/Register";
import { NOTFOUND } from "dns";
import NotFound from "./pages/notfound/NotFound";
import Dashboard from "./pages/dashboard/dashboard";
import Authlayout from "./layout/auth-layout/authlayout";
import Defaultlayout from "./layout/default/default";
import AddProductForm from "./pages/dashboard/product/add-products";
import GetProduct from "./pages/dashboard/product/get-product";
import GetCategory from "./pages/dashboard/category/get-category";
import GetOrders from "./pages/dashboard/product/get-order";
import CustomerPage from "./pages/dashboard/customers/get-customer";
// import UpdateProduct from './pages/dashboard/product/update-product'
// import UpdateProductForm from './pages/dashboard/product/update-product'
import UpdateProductPage from "./pages/dashboard/product/update-product/update-product";
import Userlayout from "./layout/user-layout/userLayout";
import Adminlayout from "./layout/user-layout/adminLayout";
import UserDashboard from "./pages/dashboard/user-dashboard/UserDashboard";
import Cart from "./pages/dashboard/carts/Cart";
import Shipping from "./pages/dashboard/shipping/shipping";
import OrderRequests from "./pages/dashboard/shipping/order-requests";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />

        <Route element={<Defaultlayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />

          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<SingleProduct />} />

          <Route path="/Post" element={<Post />} />
          <Route path="/Post/:id" element={<PostDetailPage />} />
          <Route path="/aboutus" element={<About />} />

          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<Authlayout />}>
          <Route element={<Adminlayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/add-product" element={<AddProductForm />} />
            <Route
              path="/dashboard/update-product/:id"
              element={<UpdateProductPage />}
            />
            <Route path="/dashboard/get-product" element={<GetProduct />} />
            <Route path="/dashboard/get-customers" element={<CustomerPage />} />
            <Route path="/dashboard/get-category" element={<GetCategory />} />
            <Route path="/dashboard/get-order" element={<GetOrders />} />

            <Route path="/dashboard/customers" element={<CustomerPage />} />
          </Route>

          <Route element={<Userlayout />}>
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="/carts" element={<Cart />} />
            <Route path="/shipping" element={<OrderRequests />} />
            <Route path="/shipping/:id" element={<Shipping />} />


          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
