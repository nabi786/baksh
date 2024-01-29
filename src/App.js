import React, { useState,useEffect } from "react";
import Context from "./components/contextAPI/context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/index";

import AOS from "aos";
import "aos/dist/aos.css";

// All pages
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage";

function App() {
  var [test, setTest1] = useState(0);
  var [contactModal, setContactModal] = useState(false);

  const globalValues = {
    test: test,
    setTest1Value: (value) => {
      setTest1(value);
    },
    contactModal,
    setContactModal : (value)=>{
      setContactModal(value)
    }
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Context.Provider value={globalValues}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<AboutPage />} />
            <Route path="*" exact element={<ErrorPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
