import React, {useEffect, useState} from 'react';
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import About from "../About/About";
import Service from "../Service/Service";
import Experience from "../Experience/Experience";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";
import Cp from "../Cp/Cp";


function App() {
    const[loading, setLoading] = useState(true);
    console.log(loading);
    setTimeout(() =>{
        setLoading(false);
    }, 2000);
    console.log(loading);
  return (
      <>
          {loading ? <Loader/> : <Cp/>

          }
      </>

  );
}

export default App;
