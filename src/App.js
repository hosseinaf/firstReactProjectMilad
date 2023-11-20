import React from "react";
import "./App.css";
// import style from "./App.module.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Search from "./components/Search";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
class App extends React.Component {
  render() {
    return (
      <>
        <Navbar></Navbar>
        <Banner></Banner>
        <Cards></Cards>
        <Search />
        <Logo></Logo>
        <Footer />
      </>
    );
  }
}

export default App;
