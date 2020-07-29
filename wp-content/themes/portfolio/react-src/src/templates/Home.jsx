import React, { Component } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faTwitterSquare } from '@fortawesome/free-solid-svg-icons'
import {
  faTwitterSquare,
  faLinkedin,
  faFlickr,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Typography from "@material-ui/core/Typography";
import profile_pic from "../assets/images/profile.jpg";
import $ from "jquery";

export default class Home extends Component {
  componentDidMount() {
    $(".skillbar").each(function () {
      $(this)
        .find(".skillbar-bar")
        .animate(
          {
            width: $(this).attr("data-percent"),
          },
          500
        );
    });
  }

  render() {
    const skills = [
      "HTML5",
      "Bootstrap",
      "CSS3",
      "Sass",
      "Jquery",
      "React",
      "Typescript",
      "Angular",
      "Gulp",
      "Grunt",
      "PHP",
      "Wordpress",
      "SEO",
      "Photoshop",
    ];

    const listskills = skills.map((skill) => (
      <div className="skillbar clearfix " data-percent="100%">
        <div className="skillbar-title">
          <span>{skill}</span>
        </div>
        <div className="skillbar-bar"></div>
        <div className="skill-bar-percent"></div>
      </div>
    ));
    return (
      <div className="d-flex justify-content-center align-items-center my-4 flex-column">
        <div
          className="picture"
          style={{ backgroundImage: `url(${profile_pic})` }}
        ></div>
        <div className="about-resume">
          <h1>Rafael de Melo</h1>
          <p>Fullstack com foco em frontend</p>
          <div className="social">
            <a href="https://twitter.com/raffademello" target="_blank">
              <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
            </a>
            <a
              className="mx-3"
              href="https://twitter.com/raffademello"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://twitter.com/raffademello" target="_blank">
              <FontAwesomeIcon icon={faFlickr} size="2x" />
            </a>
            <a
              className="ml-3"
              href="https://twitter.com/raffademello"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>
        <div className="home-resume">
          <div className="resume d-flex flex-column">
            <h3>Detalhes pessoais</h3>
            <p>
              Olá, meu nome é Rafael de Melo, programador full stack com foco em
              frontend, além de gostar muito de música internacional. Podemos
              conversar sobre isso por horas que eu não enjoo. <br />
              <br />
              Passei por ótimas empresas como a Microsistec, Timepix e
              Anajustra. Sou formado em Sistemas de Informação na Faculdade do
              Litoral Paulista. <br />
              <br />
              Gosto de trabalhar em equipe, adoro designers talentosos, dá mais
              vontade ainda de trabalhar em um layout bem trabalhado e com boa
              usabilidade. <br />
              <br />
              Desenvolvi este projeto utilizando React e a API Rest do
              Wordpress. Sempre gostei de Wordpress e fiquei curioso em
              desenvolver uma aplicação React utilizando Wordpress como API.
              Toda a parte de cadastro de informações foi feita através do
              clássico painel de administração. Então eu pude focar mais nas
              questões de design e frontend. <br />
              <br />
              <b>Porque me qualifico como fullstack ? </b>A área da web nos
              proporciona infinitas possibilidades de aprendizado, com os anos
              de experiência acredito que a maioria dos programadores frontend
              já precisou lidar com interações front + back. Realizando ajustes
              ajax ou axios para um método backend para cadastrar no banco de
              dados. Além de realizar interações como inner join no banco de
              dados para obter o resultado desejado.
            </p>
          </div>
          <div className="skills">
            <h3>Habilidades</h3>
            <div className="skills-list">
              {listskills}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
