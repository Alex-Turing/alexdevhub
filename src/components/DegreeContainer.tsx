import styled from 'styled-components';

interface DegreeContainerProps {
    icon: React.ReactNode;
    text: string;
}

const StyledRowContainer = styled.div`
    display: flex;
    flex-direction: row; 
    align-items: center;
    gap: 1rem;
    align-self: center;
    p {
        font-family: Courier;
        font-size: 1.5rem;
        color: white;
    }
`;

const DegreeContainer = ({icon, text}: DegreeContainerProps) => {
    return (
        <>
            <StyledRowContainer>
                {icon}
                <p>{text}</p>
            </StyledRowContainer>
        </>
    )
};

export default DegreeContainer;