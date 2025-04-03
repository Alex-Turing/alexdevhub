import aboutMeData from '../assets/aboutMe.json';
import styled from 'styled-components';

const StyledText = styled.p`
    color: white;
    font-family: Courier;
    font-size: 1rem;
`;
const AboutMe = () => {
    return (
        <div>
            <StyledText>
                {aboutMeData.description.split("\n").map((line, index) => (
                    <span key={index}>
                        {line}
                        <br />
                    </span>
                ))}
            </StyledText>
        </div>
    )
};

export default AboutMe;