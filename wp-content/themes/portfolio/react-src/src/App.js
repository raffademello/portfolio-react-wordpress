import React from "react";
import { HashRouter } from "react-router-dom";
import { loadCSS } from "fg-loadcss";
import Routes from "./Routes";
import Navbar from "./components/Navbar";
import Container from "@material-ui/core/Container";
import Footer from "./components/Footer";
import SideMenu from "./components/SideMenu";
import GoogleFontLoader from 'react-google-font-loader';

function App() {
  React.useEffect(() => {
    loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );
  }, []);
  return (
    <>
    <GoogleFontLoader
      fonts={[
        {
          font: 'Quattrocento Sans',
          weights: [400, 700],
        },
        {
          font: 'Roboto Mono',
          weights: [400, 700],
        },
      ]}
      subsets={['cyrillic-ext', 'greek']}
    />
      <HashRouter>
            <SideMenu pageWrapId={"page-wrap"}/>
            <div class="page-wrap">
            <Navbar />
            <Container maxWidth="md">
              <Routes />
            </Container>
          </div>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
