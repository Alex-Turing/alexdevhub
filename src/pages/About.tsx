import { FaLaptopCode } from "react-icons/fa";
import { GiRadioTower } from "react-icons/gi";
import styled from 'styled-components';
import NameTitle from '../components/NameTitle';
import DegreeContainer from '../components/DegreeContainer';
import AboutMeData from '../components/AboutMe';
import SocialMediaContainer from "@/components/SocialMediaContainer";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2rem 1rem;
    gap: 2rem;
`;

const StyledImage = styled.img`
    width: 60%;
    height: auto;
    object-fit: cover;
    border-radius: 50%;
`;

const StyledSection = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const NameAndImageContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 2.5rem;
    text-align: center;
`;

const Home = () => {
    return (
        <StyledContainer>
            <StyledSection>
                <NameAndImageContainer>
                    <StyledImage src='https://github.com/Alex-Turing.png' alt="profile picture" />
                    <NameTitle name="ALEXANDER HERNANDEZ" />
                </NameAndImageContainer>
                <DegreeContainer icon={<FaLaptopCode color="white" fontSize="1.5rem" />} text="Software Developer" />
                <DegreeContainer icon={<GiRadioTower color="white" fontSize="1.5rem" />} text="Telecommunications Engineer" />
                <SocialMediaContainer />
            </StyledSection>
            <StyledSection>
                <AboutMeData /> 
            </StyledSection>
        </StyledContainer>
    )
};

export default Home;