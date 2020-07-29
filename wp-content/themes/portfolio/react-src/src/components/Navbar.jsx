import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";


const useStyles = (theme => ({
  title: {
    flexGrow: 1,
    fontFamily:['Roboto Mono'],
    fontWeight:'700'
  },
  AppBar:{
    backgroundColor:'#26a69a'
  }
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" style={classes.AppBar}>
          <Toolbar className="d-flex justify-content-between">
            <Typography variant="h6" style={classes.title}>
              Rafael de Melo
            </Typography>
            <ButtonGroup
              class="desk-nav"
              color="inherit"
              aria-label="outlined primary button group"
            >
              <Button  component={Link} to="/">
                Home
              </Button>
              <Button component={Link} to="/portfolio">
                Portfolio
              </Button>
              <Button component={Link} to="/contato">
                Contato
              </Button>
            </ButtonGroup>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}


