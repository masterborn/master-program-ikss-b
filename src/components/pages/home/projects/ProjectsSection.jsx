import { useState, useMemo } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import SecondaryButton from '@buttons/secondaryButton';
import { sortByOrder } from '@mappers/contentful';

import {
  ProjectsSwitchContainer,
  SwitchButton,
} from '@root/components/Generic/ProjectsSwitch/ProjectsSwitch.styles';
import ProjectTile from '@generic/projectTile/ProjectTile';
import { ProjectSection, SectionHeader } from './ProjectsSection.styles';

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
      <ProjectsSwitchContainer>
        {homepageProjects.map(({ title }) => (
          <SwitchButton
            key={title}
            value={title}
            onClick={switchProject}
            clicked={title === currentProject.title}
          >
            {title}
          </SwitchButton>
        ))}
      </ProjectsSwitchContainer>
      <ProjectTile showOnHomepage project={currentProject} />
      <Link passHref href="/projekty">
        <a href>
          <SecondaryButton large>Zobacz wszystkie projekty</SecondaryButton>
        </a>
      </Link>
    </ProjectSection>
  );
}

ProjectsSection.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};
