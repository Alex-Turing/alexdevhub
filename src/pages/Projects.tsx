import { IRepo } from "@/App";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import { useState } from "react";
import styled from 'styled-components';
import TechButton from "@/components/TechButton";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 1em;
    gap: 2em;
`;

const StyledText = styled.p`
    color: white;
    font-size: 1rem;
    font-family: Courier;
    text-align: justify;
    margin: 2em 0;
    padding: 1em 7em;
`;

const StyledCountingText = styled.p`
    color: #4B6387;
    font-size: 1.5rem;
    font-family: Courier;
    text-align: center;
    margin-bottom: 0.2em;
    font-weight: bold;
`;

interface RepoProps {
    repos: IRepo[];
    technologies: string[];
    handleTechFilter: (tech: string) => void;
}

const Projects = ({ repos, technologies, handleTechFilter }: RepoProps) => {
    const [tech, setTech] = useState<string>('All');
    const [selectedButton, setSelectedButton] = useState<string>('All');

    return (
        <>
            <StyledText>
                Explore my diverse range of projects, showcasing expertise in cutting-edge technologies like React, Node.js, Python, and more. Each project highlights my ability to build full-stack applications, integrate APIs, and create seamless user experiences. Use the technology filters to discover projects tailored to your interests and see how I leverage different tools to solve real-world problems.
            </StyledText>
            <Container>
                {technologies.map((tech) =>
                (
                    <TechButton
                        key={tech}
                        tech={tech}
                        isSelected={tech === selectedButton}
                        onClick={() => {
                            setTech(tech);
                            setSelectedButton(tech);
                            handleTechFilter(tech);
                        }}
                    />
                )
                )}
            </Container>
            {tech !== "All" ?
                (<StyledCountingText>{repos.length} repositories currently using {tech} technology in their implementation</StyledCountingText>) :
                (<StyledCountingText>There are currently {repos.length} repositories available for you to check</StyledCountingText>)
            }
            <ProjectsCarousel repos={repos} />
        </>
    )
};

export default Projects;