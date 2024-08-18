import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrderSummery from "./components/checkout";
import Contact from "./components/contacts";
import ProductDetails from "./components/shared/product-details";
import Dashboard from "./dashboard/index";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import Orders from "./pages/orders";
import Products from "./pages/products";
import Layout from "./utils/Layout";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Layout>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/order-summery" element={<OrderSummery />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
