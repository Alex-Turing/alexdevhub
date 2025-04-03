import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface IconLink {
    href: string;
    icon: React.ReactNode;
}

const links: IconLink[] = [
    { href: "https://www.linkedin.com/in/alexander-hernandez-software-developer", icon: <IoLogoLinkedin size="2rem" /> },
    { href: "https://github.com/Alex-Turing", icon: <FaGithub size="2rem" /> },
    { href: "/contact", icon: <SiGmail size="2rem" /> },
]

const StyledIconContainer = styled.div`
    width: 50%;
    padding: 0.5rem;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    gap: 2rem;
`;

const StyledIcon = styled(Link)<{ to:string }>`
    display: flex;
    transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
    
    color: ${({ to }) =>
                to?.includes("linkedin") ? "gray" : 
                to?.includes("github") ? "gray" :   
                to?.includes("contact") ? "gray" : "white"}; 

    &:hover {
        transform: scale(1.1);  
        svg {
            color: ${({ to }) =>
                to?.includes("linkedin") ? "white" : 
                to?.includes("github") ? "white" : 
                to?.includes("contact") ? "white" : "white"}; 
        }
    }
`;

const SocialMediaContainer = () => {
    return (
        <StyledIconContainer>
            {links.map(({ href, icon }) => (
                <StyledIcon to={href} key={href}>
                    {icon}
                </StyledIcon>
            ))}
        </StyledIconContainer>
    )
};

export default SocialMediaContainer;