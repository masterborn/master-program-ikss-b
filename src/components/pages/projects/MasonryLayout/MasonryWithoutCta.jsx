import React from 'react';
import PropTypes from 'prop-types';

import ProjectTile from '@projectTile/ProjectTile';
import { Masonry } from '../ProjectsMasonry.styles';

export default function MasonryWithoutCta({ projects, getColumnWidth }) {
  return (
    <Masonry columnWidth={getColumnWidth(projects)}>
      {projects.map((project) => (
        <ProjectTile key={project.title} isOnGrid project={project} />
      ))}
    </Masonry>
  );
}

MasonryWithoutCta.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  getColumnWidth: PropTypes.func.isRequired,
};
