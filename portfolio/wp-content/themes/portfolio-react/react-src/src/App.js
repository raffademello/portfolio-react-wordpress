import React from "react";
import { HashRouter } from "react-router-dom";
import { loadCSS } from 'fg-loadcss';
import Routes from "./Routes";
import Navbar from "./components/Navbar";
import Container from "@material-ui/core/Container";
import Footer from "./components/Footer";

function App() {
  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);
  return (
    <>
      <HashRouter>
        <Navbar />
        <Container maxWidth="md">
          <Routes />
        </Container>
        <Footer/>
      </HashRouter>
    </>
  );
}

export default App;
