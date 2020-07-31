import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import { loadCSS } from "fg-loadcss";
import Routes from "./Routes";
import Navbar from "./components/Navbar";
import Container from "@material-ui/core/Container";
import Footer from "./components/Footer";
import SideMenu from "./components/SideMenu";
import GoogleFontLoader from 'react-google-font-loader';

export default class App extends Component {
  componentDidMount(){
    document.title = "Rafael de Melo - Desenvolvedor Web"
  }
  render() {
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
    )
  }
}

