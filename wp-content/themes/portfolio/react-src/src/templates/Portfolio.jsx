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

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    fetch("http://localhost/portfolio-react/wp-json/wp/v2/posts?_embed")
      .then(data => {
        return data.json();
      })
      .then(data => {
        setPortfolios(data);
        console.log(data);
      })
      .catch(err => {
        console.log(123123);
      });
  }, []);

  const classes = useStyles();
  console.log(portfolios);
  return (
    <>
      <div className="display-projects">
        {portfolios.map(row => (
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={`${row._embedded['wp:featuredmedia']['0'].source_url}`}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {row.slug}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {row.content.rendered}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
