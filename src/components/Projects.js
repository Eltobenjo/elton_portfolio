import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import enterprise from './images/enterprise.jpg';
import LanguageIcon from "@material-ui/icons/Language";
import cookbook from './images/cookbook.png'
import portfolio from './images/Portfolio.png'
import vegan from './images/vegan.png'



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



export default function Projects() {
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
              Projects
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Projects which demonstrate my skill progression.
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {/* new project*/}
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={enterprise}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    My first Website
                  </Typography>
                  <Typography>HTML and CSS.</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link href="https://github.com/Eltobenjo/Star-Trek">
                      <GitHubIcon></GitHubIcon>
                    </Link>
                  </Button>
                  <Button size="small" color="primary">
                    <Link href="https://eltobenjo.github.io/Star-Trek/">
                      <LanguageIcon></LanguageIcon>
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/* new project*/}
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={cookbook}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Cookbook App
                  </Typography>
                  <Typography>HTML, CSS,Bootstrap and GitHub.</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link href="https://github.com/Eltobenjo/Cookbook">
                      <GitHubIcon></GitHubIcon>
                    </Link>
                  </Button>
                  <Button size="small" color="primary">
                    <Link href="https://cookbook-elton.netlify.app/">
                      <LanguageIcon></LanguageIcon>
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            {/* new project end*/}
            {/* new project start*/}
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={vegan}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Front-End Project
                  </Typography>
                  <Typography>React.js and Contentful CMS.</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link href="//github.com/Eltobenjo/React-Cook-Book">
                      <GitHubIcon></GitHubIcon>
                    </Link>
                  </Button>
                  <Button size="small" color="primary">
                    <Link href=" https://cmscookbook.herokuapp.com/">
                      <LanguageIcon></LanguageIcon>
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            {/* new project end*/}
            {/* new project start*/}
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={portfolio}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    My Portfolio
                  </Typography>
                  <Typography>React, Material UI.</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link href="#">
                    
                    </Link>
                  </Button>
                  <Button size="small" color="primary">
                    <Link href="#https://elton-portfolio.herokuapp.com/">
                      <LanguageIcon></LanguageIcon>
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            {/* new project end*/}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
