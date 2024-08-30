import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
const NotFound = React.lazy(() => import("./../../pages/not-found/index"));
const Home = React.lazy(() => import("./../../pages/home/index"));
const Login = React.lazy(() => import("./../../pages/auth/login/index"));
const Register = React.lazy(() => import("./../../pages/auth/register/index"));
const Products = React.lazy(() => import("./../../pages/products/index"));
const Contact = React.lazy(() => import("./../../components/contacts/index"));
const Orders = React.lazy(() => import("./../../pages/orders/index"));
const Dashboard = React.lazy(() => import("./../../dashboard/index"));
const ProductDetails = React.lazy(() =>
  import("./../../components/shared/product-details/index")
);
const OrderSummery = React.lazy(() =>
  import("./../../components/checkout/index")
);

const AppRouter = ({ children }) => {
  return (
    <>
      {children}
      <Suspense
        fallback={
          <div>
            <PropagateLoader
              color="#1de0ce"
              cssOverride={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              size={20}
            />
          </div>
        }
      >
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/category/:id" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/order-summery" element={<OrderSummery />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRouter;
