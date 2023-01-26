
import portfolio from "../images/portfolio.png";
import enterprise from "../images/enterprise.jpg";
import p64 from "../images/p64.png";



const ProjectsData = [
  {
    id: 1,
    name: " My Portfolio",
    image: portfolio,
    github: "https://github.com/Eltobenjo/elton_portfolio",
    live: "https://elton-portfolio.herokuapp.com/",
    description: "Built using React and Material UI",
  },
  {
    id: 2,
    name: " My First site",
    image: enterprise,
    github: "https://github.com/Eltobenjo/elton_portfolio",
    live: "https://eltons-first.netlify.app/",
    description: "My very first attemp at building a wesite",
  },
  {
    id: 2,
    name: " My First Proffessional site.",
    image: p64,
    github: "",
    live: "https://pokoje64.pl/",
    description: "My very first proffessional website using HTML,CSS and W3.CSS framework.",
  },
];
export default ProjectsData;
