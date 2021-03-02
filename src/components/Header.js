import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    position: "fixed",
    height:'4rem',
    flexWrap:'wrap',
    alignContent:'flexEnd',
   
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    
  },
 

}));

export default function Header() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <div className='icons'>
          <Link
            href="https://github.com/Eltobenjo"
            variant="button"
            color="textPrimary"
            className={classes.link}
          >
            <GitHubIcon fontSize="large"></GitHubIcon>
          </Link>

          <Link
            href="https://www.linkedin.com/in/elton-c-benjamin"
            variant="button"
            color="textPrimary"
            className={classes.link}
          >
            <LinkedInIcon fontSize="large"></LinkedInIcon>
          </Link>
        </div>
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          ></Typography>
          <nav>
            <Link
              variant="button"
              color="textPrimary"
              href="/"
              className={classes.link}
            >
              Home
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="/aboutme"
              className={classes.link}
            >
              About Me
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="/skills"
              className={classes.link}
            >
              Skills
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="/projects"
              className={classes.link}
            >
              Projects
            </Link>
          {/*  <Link
              variant="button"
              color="textPrimary"
              href="/contact"
              className={classes.link}
            >
              Contact
          </Link>*/}
          </nav>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
