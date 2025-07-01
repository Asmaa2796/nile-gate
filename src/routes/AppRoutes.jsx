import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SocialIcons from "../components/SocialIcons/SocialIcons";
import ScrollTop from "../components/ScrollTop/ScrollTop";
import ProductDetails from "../components/Products/ProductDetails";
import RequestQuote from "../components/RequestQuote/RequestQuote";


export default function Applayout() {
 


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product_details/:slug/:id" element={<ProductDetails />} />
        <Route path="/request_quote" element={<RequestQuote />} />
      </Routes>
      <SocialIcons/>
      <ScrollTop/>
     <Footer />
    </>
  );
}
