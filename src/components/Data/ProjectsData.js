import enterprise from "../images/enterprise.jpg";
import cookbook from "../images/cookbook.png";
import portfolio from "../images/portfolio.png";
import cmscookbook from "../images/cmscookbook.png";


const ProjectsData = [
  
   { id: 1,
    name: "Basics",
    image: enterprise,
    github: "https://github.com/Eltobenjo/Star-Trek",
    live: "https://eltobenjo.github.io/Star-Trek/",
    description:  'A basic site using HTML and CSS',
  },
  {
    id: 2,
    name: "Cook Book Website",
    image: cookbook,
    github: "https://github.com/Eltobenjo/Cookbook",
    live: "https://elton-cookbook.netlify.app/",
    description: "Group project built using HTML, CSS, Bootstrap Git and Github",
  },
  {
    id: 3,
    name: "Front-End",
    image: cmscookbook,
    github: "https://github.com/Eltobenjo/React-Cook-Book",
    live: "https://cms-recipe-app.herokuapp.com/",
    description: "Built using React and Contentful CMS",
  },
  {
    id: 4,
    name: " My Portfolio",
    image: portfolio,
    github: "https://github.com/Eltobenjo/elton_portfolio",
    live: "https://elton-portfolio.herokuapp.com/",
    description: "Built using React and Material UI",
  },
];
export default ProjectsData;
