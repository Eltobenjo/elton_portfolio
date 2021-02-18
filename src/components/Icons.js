import React from 'react'
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
 
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));



const Icons = () => {
const classes = useStyles();

  return (
    <div>
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
  );
}

export default Icons
