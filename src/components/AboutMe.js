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
            I am a solution-oriented person with strong leadership and
            problem-solving abilities. I recognize what needs to be done and
            have learned that by fostering a positive esprit de corps in my team
            I can get even more out of my work.
            <br></br>
            <br></br>I like to immerse myself in topics and acquire new
            knowledge quite easily. I wrote my first code on a Commodore Vic 20
            at 11 and built my first PC at 17 years old.
            <br></br>
            <br></br>I served in the South African Navy as a Submariner,
            operating and maintaining complex sensor and weapon systems, as the
            weapons department Leading Seaman I was responsible for training new
            recruits.
            <br></br>
            <br></br>
            After arriving in Germany I started working in the restaurant
            industry quickly rising to senior management becoming quite adept at
            personnel organization, inventory management as well as leading
            teams of up to 75 staff members.With a natural affinity for
            technology, part of my duties was to implement ,configure and
            intergrate software systems to optimize our Operations, Human
            Recources, Financial and Marketing processes.
            <br></br>
            <br></br>With an ever increasing dependancy on software solutions I found
            myself more involved with software modernisation projects and
            immersed myself in the tech. I have taken part in a Coding Boot Camp
            to improve my coding skills.
            <br></br>
            <br></br>I have a working knowledge of HTML, CSS, Bootstrap, Bulma,
            Javascript, Reactjs, Material UI, VS-Code, Github, Git and a basic
            knowledge of Sass, Nodejs, Expressjs, MongoDB, PostgreSQL, SQL.
            <br></br>
            <br></br>I am interested in expanding my knowledge and to
            use my skills and experience to make an effective contribution.
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
