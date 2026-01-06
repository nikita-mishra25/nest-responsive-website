import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderTop from "./Components/Layout/HeaderTop";
import HeaderMain from "./Components/Layout/HeaderMain";
import Navbar from "./Components/Layout/Navbaar";
import Home from "./Components/Home/HomeBanner";
import Footer from "./Components/Layout/Footer";


function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderTop />
        <HeaderMain />
        <Navbar/>

        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
        
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;


