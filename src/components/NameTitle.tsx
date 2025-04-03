import styled from 'styled-components';

interface NameTitleProps {
    name: string;
}

const StyledTitle = styled.h1`
    font-size: 3.5rem;
    position: absolute;
    margin-bottom: 2rem;
    bottom: -3rem;
    left: -5rem;
    text-align: left;
    z-index: 2;
    color: white;
`;

const NameTitle = ({ name }: NameTitleProps) => {
    return (
        <>
            <StyledTitle>{name}</StyledTitle>
        </>
    )
};

export default NameTitle;