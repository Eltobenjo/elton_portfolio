import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

export default function AboutMe() {
  const classes = useStyles();
  return (
    <div className="aboutMe">
      <div className={classes.heroContent}>
        <Container maxWidth="lg">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            About Me
          </Typography>
          <Typography variant="h5" align="left" color="textSecondary" paragraph>
            I am a former Restaurant Manager with extensive experience in
            controlling and budget planning, I have led large teams in fast
            paced environments, developing, implementing and optimizing systems
            and processes to increase productivity and reduce operating costs
            while still maintaining a service standard .<br></br>
            <br></br>Currently I am transitioning into Full-Stack Web Development
            where it is my goal to use my skills and experience gained in
            Gastronomy to develop Web Apps to help overcome challenges faced by the
            industry in the digital age.
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item></Grid>
              <Grid item></Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </div>
  );
}


