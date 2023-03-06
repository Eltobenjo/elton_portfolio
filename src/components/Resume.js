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
              September 2022-Present<br></br>Web Developer<br></br>Freelance
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
              2021-2022<br></br>Chipotle Mexican Grill<br></br>
              General Manager
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
              2018-2020
              <br></br>Chicago Meatpackers<br></br>
              General Manager
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
              2016-2018<br></br>Yours Sports Bars Germany<br></br>General Manager
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
              2004-2016<br></br>O´Reillys´s Irish Pubs Germany<br></br>
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
              2001-2004<br></br>Fox Pubs Germany<br></br>General Manager
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
              1995-1998<br></br>South african Navy <br></br>Submariner
            </Typography>
          </TimelineContent>
        </TimelineItem>
      
         
      </Timeline>
    </React.Fragment>
  );
}
