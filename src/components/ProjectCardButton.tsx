import { FaGithub } from "react-icons/fa";

interface ButtonProps {
    link: string;
}

const ProjectCardButton = ({ link }: ButtonProps) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <FaGithub size="2.2em" color="#6e5494"/>
        </a>

    );
};

export default ProjectCardButton;