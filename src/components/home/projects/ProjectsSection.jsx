import { useState, useMemo } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import SecondaryButton from '@root/components/buttons/secondaryButton';
import ProjectTile from '@root/components/projectTile/ProjectTile';
import { sortByOrder } from '@root/dataMappers/contentful';

import {
  ProjectSection,
  ProjectButton,
  ProjectsButtonsContainer,
  SectionHeader,
} from './ProjectsSection.styles';

function sortProjects(projects) {
  const homepageProjects = projects.filter((project) => project.showOnHomepage);
  const sortedProjects = sortByOrder(homepageProjects);
  return sortedProjects.slice(0, 3);
}
export default function ProjectsSection({ projects }) {
  const homepageProjects = useMemo(() => sortProjects(projects), [projects]);
  const [currentProject, setCurrentProject] = useState(homepageProjects[0]);

  function switchProject({ target }) {
    const { value: projectTitle } = target;
    const nextProject = homepageProjects.find(({ title }) => title === projectTitle);
    setCurrentProject(nextProject);
  }
  return (
    <ProjectSection id="projects">
      <SectionHeader>Najnowsze Projekty</SectionHeader>
      <ProjectsButtonsContainer>
        {homepageProjects.map(({ title }) => (
          <ProjectButton
            key={title}
            value={title}
            onClick={switchProject}
            clicked={title === currentProject.title}
          >
            {title}
          </ProjectButton>
        ))}
      </ProjectsButtonsContainer>
      <ProjectTile showOnHomepage project={currentProject} />
      <Link passHref href="/projekty">
        <a href>
          <SecondaryButton isBig>Zobacz wszystkie projekty</SecondaryButton>
        </a>
      </Link>
    </ProjectSection>
  );
}

ProjectsSection.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};
