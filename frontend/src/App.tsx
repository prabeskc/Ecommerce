import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './layout/Header'
import Home from './pages/Home/Home'
import Contact from './pages/contact/Contact'
import Pricing from './pages/pricing/Pricing'
import Product from './pages/products/Product'
import SingleProduct from './pages/products/product-details'
import Post from './pages/Post/Post'
import PostDetails from './pages/Post/PostDetail'
import About from './pages/aboutus/About'
import PostDetailPage from './pages/Post/PostDetail'
import Signin from './pages/signin/Signin'
import Register from './pages/register/Register'
import { NOTFOUND } from 'dns'
import NotFound from './pages/notfound/NotFound'
import Dashboard from './pages/dashboard/dashboard'
import Authlayout from './layout/auth-layout/authlayout'
import Defaultlayout from './layout/default/default'
import AddProductForm from './pages/dashboard/product/add-products'
import GetProduct from './pages/dashboard/product/get-product'
import GetCustomers from './pages/dashboard/product/get-customers'
import GetCategory from './pages/dashboard/category/get-category'
import GetOrders from './pages/dashboard/product/get-order'




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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/add-product" element={<AddProductForm />} />
          <Route path="/dashboard/get-product" element={<GetProduct />} />
          <Route path="/dashboard/get-customers" element={<GetCustomers />} />
          <Route path="/dashboard/get-category" element={<GetCategory />} />
          <Route path="/dashboard/get-order" element={<GetOrders />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
