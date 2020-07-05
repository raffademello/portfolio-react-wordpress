import React, { Component } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import profile_pic from "../assets/images/profile.jpg";
import $ from "jquery";

export default class Home extends Component {
  componentDidMount(){
		$('.skillbar').each(function(){
			$(this).find('.skillbar-bar').animate({
				width:$(this).attr('data-percent')
			},500);
		});
  }
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
          <div className="skills">
            <h3>Habilidades</h3>
            <div className="d-flex">
              <div className="flex-fill">
                <div className="skillbar clearfix " data-percent="65%">
                  <div className="skillbar-title" style={{background:'#d35400'}}>
                    <span>HTML5</span>
                  </div>
                  <div className="skillbar-bar" style={{background: '#e67e22'}}></div>
                  <div className="skill-bar-percent">20%</div>
                </div>

                <div className="skillbar clearfix " data-percent="75%">
                  <div className="skillbar-title" style={{background:'#5F3F8A'}}>
                    <span>Bootstrap</span>
                  </div>
                  <div className="skillbar-bar" style={{background:'#5F3F8A'}}></div>
                  <div className="skill-bar-percent">25%</div>
                </div>

                <div className="skillbar clearfix " data-percent="80%">
                  <div className="skillbar-title" style={{background:'#2980b9'}}>
                    <span>CSS3</span>
                  </div>
                  <div className="skillbar-bar" style={{background:'#3498db'}}></div>
                  <div className="skill-bar-percent">25%</div>
                </div>

                <div className="skillbar clearfix " data-percent="70%">
                  <div className="skillbar-title" style={{background:'#CF649A'}}>
                    <span>Sass</span>
                  </div>
                  <div className="skillbar-bar" style={{background:'#cf649a'}}></div>
                  <div className="skill-bar-percent">25%</div>
                </div>

                <div className="skillbar clearfix " data-percent="50%">
                  <div className="skillbar-title" style={{background:'#2c3e50'}}>
                    <span>jQuery</span>
                  </div>
                  <div className="skillbar-bar" style={{background:'#2c3e50'}}></div>
                  <div className="skill-bar-percent">50%</div>
                </div>

                <div className="skillbar clearfix " data-percent="30%">
                  <div className="skillbar-title" style={{background:'#007ACC'}}>
                    <span>Typescript</span>
                  </div>
                  <div className="skillbar-bar" style={{background:'#007ACC'}}></div>
                  <div className="skill-bar-percent">50%</div>
                </div>
              </div>

              <div className="flex-fill pl-lg-3">
                <div className="skillbar clearfix " data-percent="35%">
                  <div className="skillbar-title" style={{background:'#c53031'}}>
                    <span>Angular CLI</span>
                  </div>
                  <div className="skillbar-bar" style={{background:'#c53031'}}></div>
                  <div className="skill-bar-percent">50%</div>
                </div>

                <div className="skillbar clearfix " data-percent="50%">
                  <div className="skillbar-title" style={{background:'#EB4A4B'}}>
                    <span>Gulp</span>
                  </div>
                  <div className="skillbar-bar" style={{background:'#EB4A4B'}}></div>
                  <div className="skill-bar-percent">60%</div>
                </div>

                <div className="skillbar clearfix " data-percent="60%">
                  <div className="skillbar-title" style={{background:'#46465e'}}>
                    <span>PHP</span>
                  </div>
                  <div className="skillbar-bar" style={{background:'#5a68a5'}}></div>
                  <div className="skill-bar-percent">40%</div>
                </div>

                <div className="skillbar clearfix " data-percent="70%">
                  <div className="skillbar-title" style={{background:'#333333'}}>
                    <span>Wordpress</span>
                  </div>
                  <div className="skillbar-bar" style={{background:'#525252'}}></div>
                  <div className="skill-bar-percent">75%</div>
                </div>

                <div className="skillbar clearfix " data-percent="50%">
                  <div className="skillbar-title" style={{background:'#27ae60'}}>
                    <span>SEO</span>
                  </div>
                  <div className="skillbar-bar" style={{background:'#2ecc71'}}></div>
                  <div className="skill-bar-percent">100%</div>
                </div>

                <div className="skillbar clearfix " data-percent="60%">
                  <div className="skillbar-title" style={{background:'#124e8c'}}>
                    <span>Photoshop</span>
                  </div>
                  <div className="skillbar-bar" style={{background:'#4288d0'}}></div>
                  <div className="skill-bar-percent">70%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
