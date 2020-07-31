import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import LinearProgress from '@material-ui/core/LinearProgress';
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  media: {
    height: 140
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
}));

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([]); /* get projects */
  const [open, setOpen] = useState(false); /* open Modal */
  const [loading, setLoading] = useState(true);
///?rest_route=/wp/v2/posts&_embed
  useEffect(() => {
    axios
      .get(`http://localhost/portfolio-react/wp-json/wp/v2/posts?_embed`)
      .then(res => {
        setPortfolios(res.data);
        setLoading(false);
      });
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  if (loading) {
    return  <LinearProgress color="secondary" />;
  } else {
    return <>
      <h1>Portfólio</h1>

      <div className="display-projects">
        {portfolios.map(row => (
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={`${row._embedded["wp:featuredmedia"]["0"].source_url}`}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {row.slug}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="max-width-dialog-title"
              >
                <DialogTitle id="max-width-dialog-title">
                  Optional sizes
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    {ReactHtmlParser(row.content.rendered)}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
              <Button size="small" color="primary" onClick={handleOpen}>
                Detalhes
              </Button>
              <Button size="small" color="primary">
                Ver projeto
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </>;
  }
};

export default Portfolio;
