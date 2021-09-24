import React from 'react';
import PropTypes from 'prop-types';

import ProjectTile from '@generic/projectTile/ProjectTile';
import MidCta from '@cta/midCta/midCta';
import { Masonry } from '../ProjectsMasonry.styles';

function sortToColumns(projects) {
  const even = (number) => number % 2 === 0;
  const evenProjects = projects.filter((_, index) => even(index));
  const oddProjects = projects.filter((_, index) => !even(index));
  return [...evenProjects, ...oddProjects];
}

function sortWithCta(projects) {
  const beforeCtaProjects = sortToColumns(projects.slice(0, 4));
  const afterCtaProjects = sortToColumns(projects.slice(4));
  return [...beforeCtaProjects, ...afterCtaProjects];
}

export default function MasonryLayout({ projects, midCtaContent }) {
  const showCta = projects.length > 6;
  const sortedProjects = showCta ? sortWithCta(projects) : sortToColumns(projects);

  return (
    <Masonry>
      {sortedProjects.map((project, index) => {
        const order = projects.findIndex((elem) => elem.title === sortedProjects[index].title);
        return (
          <>
            <ProjectTile order={order} key={project.title} isOnGrid project={project} />
            {index === 3 && showCta && <MidCta order={order} midCtaContent={midCtaContent} />}
          </>
        );
      })}
    </Masonry>
  );
}
MasonryLayout.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  midCtaContent: PropTypes.shape({}).isRequired,
};
