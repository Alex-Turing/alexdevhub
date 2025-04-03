import { IRepo } from "@/App";
import styled from 'styled-components';
import ProjectCardButton from "./ProjectCardButton";
import LanguageTags from "./LanguageTags";

interface CardProps {
    repos: IRepo[];
}

const StyledFigure = styled.figure`
    width: 370px;
    max-width: 100%;
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(to bottom right, #4B6387, #1E2B40);
    border-radius: 20px;
    border: 2px solid rgba(99,125,160,0.5);
    backdrop-filter: blur(12px);
    color: white;
    font-family: "Courier", sans-serif;
    padding: 0;
    
    p {
        font-size: 0.9em;
        font-style: italic;
        color: #ccc;
        margin: 1em 1em;
    }
`;

const StyledFigcaption = styled.figcaption`
    color: #fff;
    display: flex;
    flex-direction: column;
    flex-grow: 1; /* Allows description to take available space */
    justify-content: space-between; /* Push footer to bottom */
`;

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: auto;
    background: #0c121d;
    border-radius: 0 0 20px 20px;
    padding: 10px 10px;
    overflow: hidden;

    h3 {
        font-family: 'Courier New', Courier, monospace;
        font-size: 1em;
        margin: 0;
        font-weight: bold;
    }
`;

const UserInteractionsContainer = styled.div`
    display: flex;
    align-self: flex-end;
    gap: 10px;
    flex-direction: row;
`;

const ProjectInfoCard = ({ repos }: CardProps) => {
    return (
        <>
            {repos.map((repo) => (
                <StyledFigure key={repo.id}>
                    <p>{repo.description || "Description in progress..."}</p>
                    <StyledFigcaption>
                        <StyledFooter>
                            <h3>{repo.name}</h3>
                            <LanguageTags repo={repo} />
                            <UserInteractionsContainer>
                                <ProjectCardButton link={repo.html_url} />
                            </UserInteractionsContainer>
                        </StyledFooter>
                    </StyledFigcaption>
                </StyledFigure>
            ))}
        </>
    )
};

export default ProjectInfoCard;