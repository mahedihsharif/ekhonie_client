import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRouter from "./router/routes";
import Layout from "./utils/Layout";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Layout>
          <AppRouter />
        </Layout>
      </BrowserRouter>

      <ScrollToTop
        smooth
        color="#1D4ED8"
        height="17px"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </>
  );
}

export default App;
