import styled from 'styled-components';
import {useEffect, useState} from 'react';
import { iconsMap } from '@/utils/iconsMap';
import { IRepo } from '@/App';

interface TagProps {
    repo: IRepo;
}

const Container = styled.div`
    padding: 0.2em 0.2em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`;

const StyledTag = styled.div`
    display: inline-flex;
    padding: 0.1rem 0.3rem;
    background-color: none;
    color: #4B6387;

`;

const keywordToTagMap: { [key: string]: string } = {
    node: "nodedotjs",
    nodejs: "nodedotjs",
    angular: "angular",
    dotnet: "aspnet",
    react: "react",
    sql: "sql",
    mongodb: "mongodb",
    mongo: "mongodb",
};

const LanguageTags = ({ repo }: TagProps) => {
    const [tags, setTags] = useState<string[]>([]);

    useEffect(() => {
        const updatedTags = new Set([...repo.languages]);
        Object.keys(keywordToTagMap).forEach(keyword => {
            const regex = new RegExp(`\\b${keyword}\\b`, 'i');
            if(regex.test(repo.name)) {
                updatedTags.add(keywordToTagMap[keyword]);
            }
        })
        setTags(Array.from(updatedTags));
    }, [repo]);

    return (
        <Container>
            {tags.map(tag => (
                <StyledTag key={tag}>
                    {iconsMap[tag.toLowerCase().replace(/\./g,"").replace("#", "sharp")] || null}
                </StyledTag>
            ))}
        </Container>
    )
};

export default LanguageTags;