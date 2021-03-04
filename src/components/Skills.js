import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import html from "./images/html.png";
import css from "./images/css.png";
import js from "./images/js.png";
import react from "./images/react.png";
import node from "./images/node.png";
import sass from "./images/sass.png";
import materialui from "./images/materialui.png";
import trello from "./images/trello.png";
import scrum from "./images/scrum.png";
import mongodb from "./images/mongodb.png";
import netlify from "./images/netlify.png";
import heroku from "./images/heroku.png";
import bulma from "./images/bulma.png";
import git from "./images/git.png";
import github from "./images/github.png";
/*import sql from './images/sql.png'
import mysql from './images/mysql.png'
import postgresql from './images/postgresql.png'
*/
import vscode from "./images/vscode.png";
import bootstrap from "./images/bootstrap.png";
import jira from "./images/jira.png";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },

  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [
  {
    id: "1",
    name: "HTML 5",
    img: html,
    Description: "",
  },
  {
    id: "2",
    name: "CSS 3",
    img: css,
    Description: " ",
  },
  {
    id: "3",
    name: "Sass",
    img: sass,
    Description: " ",
  },
  {
    id: "4",
    name: "Bulma",
    img: bulma,
    Description: "",
  },

  {
    id: "5",
    name: "Bootstrap",
    img: bootstrap,
    Description: "",
  },
  {
    id: "6",
    name: "Material UI",
    img: materialui,
    Description: "",
  },

  {
    id: "7",
    name: "Javascript",
    img: js,
    Description: " ",
  },
  {
    id: "8",
    name: "React",
    img: react,
    Description: "",
  },
  {
    id: "9",
    name: "Node & Express JS",
    img: node,
    Description: "",
  },

  {
    id: "10",
    name: "MongoDB",
    img: mongodb,
    Description: "",
  },

  /* {
    id: "11",
    name: "PostgreSQL",
    img: postgresql,
    Description: "",
  },
  {
    id: "12",
    name: "SQL",
    img: sql,
    Description: "",
  },
  {
    id: "13",
    name: "MySQL",
    img: mysql,
    Description: "",
  },*/

  {
    id: "14",
    name: "VS-Code",
    img: vscode,
    Description: "",
  },
  {
    id: "15",
    name: "Heroku",
    img: heroku,
    Description: "",
  },
  {
    id: "16",
    name: "Netlify",
    img: netlify,
    Description: "",
  },
  {
    id: "17",
    name: "Git Hub",
    img: github,
    Description: "",
  },
  {
    id: "18",
    name: "Git",
    img: git,
    Description: "",
  },
  {
    id: "19",
    name: "Agile & Scrum",
    img: scrum,
    Description: "",
  },
  {
    id: "20",
    name: "Trello",
    img: trello,
    Description: "",
  },
  {
    id: "21",
    name: "Jira",
    img: jira,
    Description: "",
  },
];
export default function Skills() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              My Skills
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            ></Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item></Grid>
                <Grid item></Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={6} sm={12} md={4}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia} image={card.img} />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography></Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
