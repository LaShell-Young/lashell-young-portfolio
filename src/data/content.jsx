import {
  CodeRounded,
  KeyboardRounded,
  SmartToyRounded,
  StorageRounded,
  WorkOutlineRounded,
} from "@mui/icons-material";
import fallingBallImage from "../../images/FallingBallThumbnail.png";
import mazeExploreImage from "../../images/MazeExploreThumbnail.png";

export const projects = [
  {
    name: "Entertainment Catalog",
    description: "A web application that allows users to browse and search a select list of entertainment options (movies, TV shows, and fun activities).",
    category: "Web Development",
    image: null,
    imageAlt: "Entertainment Catalog project thumbnail",
    url: "https://lashell-young.github.io/seashell-selections-fe"
  },
  {
    name: "Falling Ball",
    description: "A simple animation of a ball falling down a course.",
    category: "Hobby Project",
    image: fallingBallImage,
    imageAlt: "Falling Ball game project thumbnail",
    url: "https://play.unity.com/mg/other/floorislavabuild-27",
  },
  {
    name: "Maze Explore",
    description: "A game where the player controls a ball and traverses a maze.",
    category: "Hobby Project",
    image: mazeExploreImage,
    imageAlt: "Maze Explore game project thumbnail",
    url: "https://play.unity.com/mg/other/maze-explore-1",
  },
];

export const skillGroups = [
  {
    title: "Programming",
    icon: <CodeRounded />,
    skills: ["Java", "Javascript", "Python", "Typescript", "React", "Node.js", "SpringBoot"],
  },
  {
    title: "AI & Machine Learning",
    icon: <SmartToyRounded />,
    skills: ["Azure OpenAI", "LLMs", "Prompt Engineering", "LangChain"],
  },
  {
    title: "Other Technical Skills",
    icon: <KeyboardRounded />,
    skills: ["CICD", "Rest APIs", "Git", "Unit Testing", "Agile Methodology"],
  },
  {
    title: "Database Management",
    icon: <StorageRounded />,
    skills: ["SQL", "MySQL"],
  },
  {
    title: "Working together",
    icon: <WorkOutlineRounded />,
    skills: ["Communication", "Organization", "Collaboration", "Work ethic"],
  },
];
