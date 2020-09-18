import React, { Component } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Icon,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import axios from "axios";

const inicialState = {
  nome: "",
  email: "",
  assunto: "",
  mensagem: "",
};

export default class Contato extends Component {
  state = inicialState;
  constructor() {
    super();
  }
  
  handleOnChange = (event) => {
    const valor = event.target.value;
    const nomeCampo = event.target.name;
    this.setState({
      [nomeCampo]: valor,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = {
      nome: this.state.nome,
      email: this.state.email,
      assunto: this.state.assunto,
      mensagem: this.state.mensagem,
    }
    axios({
      method: "POST",
      url: "/wp-content/themes/portfolio/react-src/classes/src/gmail.php",
      data: data
    }).then(response => {
      console.log(response);
      if (response.data.status === 200) {
        console.log("message sent");
        this.resetForm();
      } else {
        console.log(response.data.status);
        console.log("message failed to send");
      }
    });
    //const templateUrl = '<?= get_bloginfo("template_url"); ?>';
    //url:  templateUrl+'/classes/Email.php',
  }

  handleCleanInput = () => {
    this.setState(inicialState);
  };

  render() {
    return (
      <>
        <h1>Entre em contato</h1>
        <form autoComplete="false">
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
                    shrink: true,
                  }}
                  variant="outlined"
                  value={this.state.mensagem}
                  name="mensagem"
                  onChange={this.handleOnChange}
                />
              </FormControl>
              <FormControl>
                <div className="d-flex justify-content-end">
                  <Button variant="contained" className="mr-3" color="primary" onClick={this.handleCleanInput}>
                    Limpar
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleSubmit}
                  >
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
