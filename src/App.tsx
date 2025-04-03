import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import githubService from './services/GithubService';
import NavigationBar from './components/NavigationBar';
import styled from 'styled-components';
import background from './assets/dark-background.jpg';
import About from './pages/About';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import PageNotFound from './pages/404PageNotFound';
import Contact from './pages/Contact';

export interface IRepo {
  id: number;
  name: string;
  html_url: string;
  language: string;
  languages_url: string;
  description: string;
  owner: Owner;
  languages: string[];
}

interface Owner {
  id: number;
  avatar_url: string;
  followers_url: string;
}

const StyledBackground = styled.div<{ $bg: string }>`
  background-image: url(${props => props.$bg});
  min-height: 100vh;
  width: 100%;
  margin-top: 0px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 3rem;

  height: auto;
  align-items: stretch;
  justify-content: flex-start;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  * {
    position: relative;
    z-index: 2;    
  }
`;

const StyledNav = styled.nav`
  color: white; 
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  min-height: 10px;
  max-height: 80px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 1rem 0 0 0;
  z-index: 1000;
  display: flex;

  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  &.loaded {
    opacity: 1;
  }

  a {
    padding: 2px;
    border-radius: 5px;
    margin: 0 1rem;
  }

   a:hover {
    color: black;
    background-color: gray;
   }
`;

function App() {
  const [reposData, setReposData] = useState<IRepo[]>([]);
  const [techList, setTechList] = useState<string[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<IRepo[]>([]);
  const [isNavLoaded, setIsNavLoaded] = useState(false);

  const listOfTechnologies = () => {
    const allTechnologies = new Set<string>();
    reposData.forEach(repo =>
      repo.languages.forEach(lang => {
        allTechnologies.add(lang)
      })
    );
    allTechnologies.add("All");
    setTechList(Array.from(allTechnologies));
  };

  const fetchRepos = async () => {
    try {
      const repos = await githubService.getAll();
      const fetchLanguages = repos.map(async (repo: IRepo) => {
        try {
          const langResponse = await githubService.getLanguages(repo.languages_url);
          return { ...repo, languages: Object.keys(langResponse) };
        }
        catch (error) {
          console.error(`Error fetching languages for ${repo.name}:`, error);
          return { ...repo, languages: [] };
        }
      });
      const reposWithLanguages = await Promise.all(fetchLanguages);
      setReposData(reposWithLanguages);
    }
    catch (error) {
      console.error('Error fetching repos:', error);
    }
  };

  const handleTechFilter = (tech: string) => {
    if (tech === "All") {
      setFilteredRepos(reposData);
    }
    else {
      console.log(`Filtering repos by ${tech}`);
      setFilteredRepos(reposData.filter(repo => repo.languages.includes(tech)));
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  useEffect(() => {
    if (reposData.length > 0) {
      listOfTechnologies();
      setIsNavLoaded(true);
    }
  }, [reposData]);

  useEffect(() => {
    setFilteredRepos(reposData);
  }, [reposData]);


  return (
    <Router>
      <StyledBackground $bg={background}>
        {isNavLoaded &&
          <StyledNav>
            <NavigationBar />
          </StyledNav>
        }
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects repos={filteredRepos} technologies={techList} handleTechFilter={handleTechFilter} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </StyledBackground >
    </Router>
  )
}

export default App
