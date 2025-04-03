import styled from 'styled-components';

interface TechButtonProps {
    tech: string;
    isSelected: boolean;
    onClick: () => void;
}

interface ButtonStyle {
    selected: boolean;
}

const StyledButton = styled.button<ButtonStyle>`
    border: 2px solid rgba(255, 255, 255, 0.2);
    background: ${(props) => (props.selected ? '#4b6387' : 'rgba(152, 193, 217, 0.2)')}; //#4B6387, #1E2B40
    color: white;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background: ${(props) => (props.selected ? '#4B6387' : '#1E2B40')};
    }
`;

const TechButton = ({ tech, isSelected, onClick }: TechButtonProps) => {
    return (
        <StyledButton selected={isSelected} onClick={onClick} >
            {tech}
        </StyledButton>
    )
};

export default TechButton;