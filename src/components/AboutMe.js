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
            person with strong leadership and problem-solving abilities. I
            recognize what needs to be done and have learned that by fostering a
            positive esprit de corps in my team I can get even more out of my
            work.
            <br></br>
            <br></br>I like to immerse myself in topics and acquire new
            knowledge quite easily. With a natural affinity for technology, I
            wrote my first code on a Commodore Vic 20 at 11 and built my first
            PC at 17 years old.
            <br></br>
            <br></br>I served in the South African Navy as a Submariner working
            with submarine sensors/weapon systems, as a Leading Seaman I was in
            charge of 9 weapons ratings plus 3 trainees.
            <br></br>
            <br></br>I then worked as a PC Technician where I assembled PC's for
            a provicial government project.
            <br></br>
            <br></br>
            After arriving in Germany I started working in the restaurant
            industry quickly rising to management becoming quite adept at
            personnel organization, inventory management as well as leading
            teams of up to 75 staff members. Part of my duties was to configure,
            implement and intergrate software systems to optimize our
            Operations, Human Recources, Financial and Marketing processes.
            <br></br>
            <br></br>I am currently switching to Web Development and to that end
            I have taken part in a Coding Boot Camp to improve my coding skills.
            <br></br>
            <br></br>I have a working knowledge of HTML, CSS, Bootstrap, Bulma,
            Javascript, Reactjs, Material UI, VS-Code, Github, Git, Trello, and
            Jira. Basic knowledge of Sass, Nodejs, Expressjs, MongoDB,
            PostgreSQL, SQL, Agile and Scrum.
            <br></br>
            <br></br>I am interested in a junior position to expand my knowledge
            and to use my skills and experience to make an effective
            contribution.
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
