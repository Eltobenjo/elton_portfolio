import enterprise from './images/enterprise.jpg';
import cookbook from './images/cookbook.png';
import portfolio from './images/portfolio.png';
import cmscookbook from './images/cmscookbook.png';

const ProjectsData = [
  {
    id: 1,
    name:"My First Website",
    image: enterprise,
    Description: "Basic site using HTML and CSS",
  },
  {
    id: 2,
    name: "Cook Book Website",
    image: cookbook,
     Description: "Built using HTML, CSS, Bootstrap Git and Github",
  },
  {
    id: 3,
    name: "Front-End",
    image: cmscookbook,
    Description: "Built using React and Contentful CMS",
  },
  {
    id: 4,
    name: " My Portfolio",
    image: portfolio,
    Description: "Built using React,Material UI",
  },
]
export default ProjectsData;