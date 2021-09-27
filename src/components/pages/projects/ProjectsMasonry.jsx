import React, { useState } from 'react';
import PropTypes from 'prop-types';

import sortProjectsByYear from '@dataMappers/projects';
import { DateSwitchButton, ProjectsSwitchContainer } from '@projectSwitch/ProjectsSwitch.styles';
import { ProjectsMasonryContainer } from './ProjectsMasonry.styles';
import MasonryLayout from './MasonryLayout/MasonryLayout';

export default function ProjectsMasonry({ projectsData, midCtaContent }) {
  const projectsCollection = sortProjectsByYear(projectsData);
  const [currentProjects, setCurrentProjects] = useState(projectsCollection[1].slice(0, 5));

  function switchDisplayedProjects({ target }) {
    const index = target.value;
    setCurrentProjects(projectsCollection[index]);
  }

  return (
    <ProjectsMasonryContainer id="projekty">
      <ProjectsSwitchContainer isOnGrid>
        {projectsCollection.map((subCollection, index) => {
          const date = new Date(subCollection[0].date);
          const year = date.getFullYear();
          return (
            <DateSwitchButton
              clicked={subCollection[0].date === currentProjects[0].date}
              key={year}
              onClick={switchDisplayedProjects}
              value={index}
            >
              {year}
            </DateSwitchButton>
          );
        })}
      </ProjectsSwitchContainer>
      <MasonryLayout midCtaContent={midCtaContent} projects={currentProjects} />
    </ProjectsMasonryContainer>
  );
}

ProjectsMasonry.propTypes = {
  projectsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  midCtaContent: PropTypes.shape({}).isRequired,
};
