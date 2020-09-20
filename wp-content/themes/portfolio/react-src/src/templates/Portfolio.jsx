import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
  media: {
    height: 140,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([]); /* get projects */
  const [open, setOpen] = useState(false); /* open Modal */
  const [titleProject,settitleProject] = useState("")
  const [detailsProject,setdetailsProject] = useState("")
  const [loading, setLoading] = useState(true);
  ///?rest_route=/wp/v2/posts&_embed
  useEffect(() => {
    axios
      .get(`/?rest_route=/wp/v2/posts&_embed`)
      .then((res) => {
        setPortfolios(res.data);
        setLoading(false);
      });
  }, []);

  const handleOpen = (titleProject, detailsProject) => {
    setOpen(true);
    settitleProject(titleProject);
    setdetailsProject(detailsProject);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  if (loading) {
    return <LinearProgress color="secondary" />;
  } else {
    return (
      <>
        <h1>Portfólio</h1>

        <div className="display-projects">
          {portfolios.map((row) => (
            <Card className={classes.root} key={row.id}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={`${row._embedded["wp:featuredmedia"]["0"].source_url}`}
                  title="Contemplative Reptile"
                />
                <CardContent align="center">
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="subtitle1"
                  >
                    {row.slug}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className="d-flex justify-content-center">
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleOpen(row.slug, row.content.rendered)}
                >
                  Detalhes 
                </Button>
              </CardActions>
            </Card>
          ))}
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="max-width-dialog-title"
          >
            <DialogTitle id="max-width-dialog-title">
              {titleProject}
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                {ReactHtmlParser(detailsProject)}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Fechar
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </>
    );
  }
};

export default Portfolio;
