import "./App.css";
import Header from "./component/layout/header/Header";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Home from "./component/home/Home";
import Footer from "./component/layout/footer/Footer";
import { Disclaimer } from "./component/layout/footer/Disclaimer";
import { CopyrightNotice } from "./component/layout/footer/Copyright-Notice";
import { PrivacyPolicy } from "./component/layout/footer/Privacy-Policy";
import { TermsConditions } from "./component/layout/footer/Terms-Conditions";
import Contact from "./component/siteComponent/Contact";
import Dashboard from "./component/adminComponent/Dashboard";
import AdminProduct from "./component/adminComponent/AdminProduct";
import AdminContact from "./component/adminComponent/AdminContact";
import AdminCreateProduct from "./component/adminComponent/AdminCreateProduct";
import AppHeaderlinks from "./component/adminComponent/AppHeaderlinks";
import Login from "./component/adminComponent/login";
import { useEffect } from "react";
import { fetchContact } from "./redux/reduxAxois/fetchContact";
import { useDispatch } from "react-redux";
import ProtectedRoute from "./component/layout/ProtectedRoute";
import { fetchProduct } from "./redux/reduxAxois/fetchProduct";
import AdminUpdateProduct from "./component/adminComponent/AdminUpdateProduct";
import Pricing from "./component/siteComponent/Pricing";
import Products from "./component/siteComponent/Products";

console.log('app.js is running');


function App() {
  const dispatch = useDispatch();
  useEffect(() => {

    // fetchContact(dispatch);
    fetchProduct(dispatch);
    

  }, [dispatch]);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />   
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/home" element={<Home />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/pricing" element={<Pricing />}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/CopyrightNotice" element={ <CopyrightNotice/>}/>
    <Route path="/Disclaimer" element={ <Disclaimer/>}/>
    <Route path="/PrivacyPolicy" element={ <PrivacyPolicy/>}/>
    <Route path="/TermsConditions" element={ <TermsConditions/>}/>
    <Route path="/admin" element={ <Dashboard />}/>
    <Route path="/admin/dashboard" element={ <Dashboard />}/>
    <Route path="/admin/product" element={ <AdminProduct />}/>
    <Route path="/admin/contact" element={ <AdminContact />}/>
    <Route path="/admin/create/product" element={ <AdminCreateProduct />}/>
    <Route path="/admin/product/:id" element={ <AdminUpdateProduct />}/>
    <Route path="/admin/navlivks" element={ <AppHeaderlinks />}/>
    <Route path="/admin/login" element={ <Login />}/>
    <Route>404 Not Found!</Route>
    </Routes>
        <Footer />
      </BrowserRouter>
     
    </ThemeProvider>
  );
}

export default App;
