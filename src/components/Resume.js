import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
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
export default function Resume() {
  const classes = useStyles();
  return (
    <React.Fragment>
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
            My Professional Expereince
          </Typography>
        </Container>
      </div>

      <Timeline align="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant="h6"
              align="left"
              color="textSecondary"
              paragraph
            >
              September 2018-June 2020<br></br>Chicago Meatpackers<br></br>
              Manager
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant="h6"
              align="right"
              color="textSecondary"
              paragraph
            >
              June 2018-Aug 2020<br></br>Fletchers Better Burger<br></br>
              Manager
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant="h6"
              align="left"
              color="textSecondary"
              paragraph
            >
              March 2018-May 2018<br></br>Dicke Wutz American BBQ<br></br>
              Manager
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant="h6"
              align="right"
              color="textSecondary"
              paragraph
            >
              May 2016-April-Feb 2018<br></br>Yours Sports Bars<br></br>Manager
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant="h6"
              align="left"
              color="textSecondary"
              paragraph
            >
              Jan 2004-April 2016<br></br>Oreillys Irish Pubs<br></br>Manager
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />

            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant="h6"
              align="right"
              color="textSecondary"
              paragraph
            >
              August 2001-Dec 2003<br></br>Fox Pubs<br></br>Manager
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant="h6"
              align="left"
              color="textSecondary"
              paragraph
            >
              Feb 1999-Feb 2001<br></br>Comtech<br></br>PC/Network Technician
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>

          <TimelineContent>
            <Typography
              variant="h6"
              align="right"
              color="textSecondary"
              paragraph
            >
              Jan 1995-1998<br></br>SA Navy<br></br>
              Submariner
            </Typography>
            

          </TimelineContent>
        </TimelineItem>
      </Timeline>



    </React.Fragment>
  );
}
