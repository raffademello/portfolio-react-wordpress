import React, { Component } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import profile_pic from "../assets/images/profile.jpg";

export default class Home extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center my-4 flex-column">
        <div
          className="picture"
          style={{ backgroundImage: `url(${profile_pic})` }}
        ></div>
        <h1>Rafael de Melo</h1>
        <p>Fullstack com foco em frontend</p>
        <div className="home-resume">
          <div className="resume d-flex flex-column">
            <h3>Detalhes pessoais</h3>
            <p>
              Hye, I’m Rafael residing in this beautiful world. I create
              websites and mobile apps with great UX and UI design. I have done
              work with big companies like Nokia, Google and Yahoo. Meet me or
              Contact me for any queries. One Extra line for filling space. Fill
              as many you want.Duis sed odio sit amet nibh vulputate cursus a
              sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
              tincidunt auctor a ornare odio.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
