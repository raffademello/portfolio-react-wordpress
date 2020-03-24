import React, { Component } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Icon,
  Grid,
  TextField
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default class Contato extends Component {
  state = {
    value: "Nome"
  };
  render() {
    return (
      <>
        <h2>Entre em contato</h2>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl>
              <InputLabel htmlFor="my-input">{this.state.value}</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="my-input">Email </InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text">
                Nós nunca divulgamos o seu email.
              </FormHelperText>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="my-input">Assunto</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
              <label className="mt-3">Mensagem</label>
              <TextField
                id="outlined-full-width"
                placeholder="Digite aqui a sua mensagem"
                fullWidth
                margin="normal"
                size="larger"
                InputLabelProps={{
                  shrink: true
                }}
                variant="outlined"
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <div className="contact-info d-flex flex-column">
              <h3>Contato</h3>
              <p>
                <Icon className="fa fa-user" /> Rafael de Melo
              </p>
              <p>
                <Icon className="fa fa-envelope" /> rafaeldemelo@outlook.com
              </p>
              <p>
                <Icon className="fa fa-phone" /> (13) 99185-1159
              </p>
              <p>
                <Icon className="fab fa-linkedin-in" /> /raffademello
              </p>
            </div>
          </Grid>
        </Grid>
      </>
    );
  }
}
