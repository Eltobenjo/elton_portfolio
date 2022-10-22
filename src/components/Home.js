import React from "react";
import elton from "./images/elton.jpg";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ReactTypingEffect from "react-typing-effect";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className="home">
      <img
        className="elton"
        src={elton}
        alt="elton"
        height="500"
        border-radius="50%"
      ></img>
      <div className="intro">
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="left"
              color="textPrimary"
              gutterBottom
            >
              Hi, I'm Elton<br></br>
              <ReactTypingEffect
                text={["Aspiring Web Developer"]}
                typingDelay="1000ms"
                eraseSpeed="2000ms"
              />
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            ></Typography>
          </Container>
         
        </div>
      </div>
      
    </div>

    
  );
};

export default Home;
