import React, { Component } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Icon,
  Grid,
  TextField,
  Button
} from "@material-ui/core";
import axios from "axios";

export default class Contato extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      email: "",
      assunto: "",
      mensagem: ""
    };
  }

  handleOnChange = event => {
    const valor = event.target.value;
    const nomeCampo = event.target.name;
    this.setState({
      [nomeCampo]: valor
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    //const templateUrl = '<?= get_bloginfo("template_url"); ?>';
    //url:  templateUrl+'/classes/Email.php',
    axios({
      method: "POST",
      url: "http://localhost/classes/Email.php",
      data: this.state
    }).then(response => {
      if (response.data.status === "sucess") {
        console.log("message sent");
        this.resetForm();
      } else if (response.data.status === "fail") {
        console.log("message failed to send");
      }
    });
  }

  resetForm() {
    this.setState({
      nome: "",
      email: "",
      assunto: "",
      mensagem: ""
    });
  }


  render() {
    return (
      <>
        <h1>Entre em contato</h1>
        <form>
          <Grid container spacing={2} className="justify-content-around">
            <Grid item xs={12} md={6}>
              <FormControl>
                <InputLabel htmlFor="my-input">Nome</InputLabel>
                <Input
                  id="nome"
                  aria-describedby="my-helper-text"
                  value={this.state.nome}
                  name="nome"
                  onChange={this.handleOnChange}
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="my-input">Email </InputLabel>
                <Input
                  id="email"
                  aria-describedby="my-helper-text"
                  value={this.state.email}
                  name="email"
                  onChange={this.handleOnChange}
                />
                <FormHelperText id="my-helper-text">
                  Nós nunca divulgamos o seu email.
                </FormHelperText>
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="my-input">Assunto</InputLabel>
                <Input
                  id="assunto"
                  aria-describedby="my-helper-text"
                  value={this.state.assunto}
                  name="assunto"
                  onChange={this.handleOnChange}
                />
              </FormControl>
              <FormControl>
                <label className="mt-3">Mensagem</label>
                <TextField
                  id="mensagem"
                  placeholder="Digite aqui a sua mensagem"
                  fullWidth
                  margin="normal"
                  size="larger"
                  InputLabelProps={{
                    shrink: true
                  }}
                  variant="outlined"
                  value={this.state.mensagem}
                  name="mensagem"
                  onChange={this.handleOnChange}
                />
              </FormControl>
              <FormControl>
                <div className="d-flex justify-content-end">
                  <Button variant="contained" className="mr-3" color="primary">
                    Limpar
                  </Button>
                  <Button variant="contained" color="primary">
                    Enviar
                  </Button>
                </div>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="contact-info d-flex flex-column">
                <h3>Contato</h3>
                <p>
                  <Icon className="fa fa-user fa-sm" /> Rafael de Melo
                </p>
                <p>
                  <Icon className="fa fa-envelope fa-sm" />{" "}
                  rafaeldemelo@outlook.com
                </p>
                <p>
                  <Icon className="fa fa-phone fa-sm" /> (13) 99185-1159
                </p>
                <p>
                  <Icon className="fab fa-linkedin-in fa-sm" /> /raffademello
                </p>
              </div>
            </Grid>
          </Grid>
        </form>
      </>
    );
  }
}
