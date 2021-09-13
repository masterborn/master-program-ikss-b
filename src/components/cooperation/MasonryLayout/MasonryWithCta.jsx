import React from 'react';
import PropTypes from 'prop-types';
import ProjectTile from '@root/components/projectTile/ProjectTile';
import { CtaMockup, Masonry } from '../ProjectsMasonry.styles';

export default function MasonryWithCta({ projects, getColumnWidth }) {
  const beforeCtaProjects = projects.slice(0, 4);
  const afterCtaProjects = projects.slice(4);

  return (
    <>
      <Masonry columnWidth={getColumnWidth(beforeCtaProjects)}>
        {beforeCtaProjects.map((project) => (
          <ProjectTile key={project.title} isOnGrid project={project} />
        ))}
      </Masonry>
      <CtaMockup />
      <Masonry columnWidth={getColumnWidth(afterCtaProjects)}>
        {afterCtaProjects.map((project) => (
          <ProjectTile key={project.title} isOnGrid project={project} />
        ))}
      </Masonry>
    </>
  );
}
MasonryWithCta.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  getColumnWidth: PropTypes.func.isRequired,
};
