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
            I am a humorous, empathic, communicative, and solution-oriented
            person with strong leadership and problem-solving abilities I
            recognize what needs to be done and have learned that by fostering a
            positive esprit de corps and motivating colleagues I can get even
            more out of my work, an essential skill that has served me well with
            my restaurant teams just as much as onboard a Submarine.<br></br>
            <br></br> I am a fast and eager learner and have always had an
            affinity for tech.I wrote my first code on my Commodore Vic 20 at 11 and built my first PC at 17
            years old.I served in the South African Navy as a Submariner working
            with submarine sensors and weapon systems and as a Leading
            Seaman I was in charge of 9 weapons ratings plus 3 trainees, I then worked
            as a PC and Network Technician and on arriving in Germany I started
            working in the restaurant industry and quickly rose to
            management and became adept at configuring, integrating and
            optimizing point of sale, personnel organization, and inventory
            management software as well as leading teams of up to 75 staff
            members and learning German.<br></br>
            <br></br>I am currently switching to Web Development and to that end
            I have taken part in a Coding Boot Camp to improve my coding skills.
            I am looking for a position to expand my knowledge and to use my
            skills and experience to make valuable contribution .
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
