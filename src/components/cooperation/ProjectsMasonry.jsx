import React, { useState } from 'react';
import sortProjectsByYear from '@root/dataMappers/projects';
import PropTypes from 'prop-types';
import {
  DateSwitchButton,
  ProjectsSwitchContainer,
} from '../Generic/ProjectsSwitch/ProjectsSwitch.styles';
import MasonryWithCta from './MasonryLayout/MasonryWithCta';
import MasonryWithoutCta from './MasonryLayout/MasonryWithoutCta';
import { ProjectsMasonryContainer } from './ProjectsMasonry.styles';

export default function ProjectsMasonry({ projectsData }) {
  const projectsCollection = sortProjectsByYear(projectsData);
  const [currentProjects, setCurrentProjects] = useState(projectsCollection[0]);
  const shouldDisplayCta = currentProjects.length > 6;
  const getColumnWidth = (projects) => 800 * Math.ceil(projects.length / 2);

  function switchDisplayedProjects({ target }) {
    const index = target.value;
    setCurrentProjects(projectsCollection[index]);
  }

  return (
    <ProjectsMasonryContainer>
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
      {shouldDisplayCta ? (
        <MasonryWithCta getColumnWidth={getColumnWidth} projects={currentProjects} />
      ) : (
        <MasonryWithoutCta getColumnWidth={getColumnWidth} projects={currentProjects} />
      )}
    </ProjectsMasonryContainer>
  );
}

ProjectsMasonry.propTypes = {
  projectsData: PropTypes.arrayOf(PropTypes.object).isRequired,
};
