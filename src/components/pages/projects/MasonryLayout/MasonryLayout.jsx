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
    <Masonry showSingleProject={projects.length === 1}>
      {sortedProjects.map((project, index) => {
        const order = projects.findIndex(({ title }) => title === sortedProjects[index].title);
        return (
          <React.Fragment key={project.title}>
            <ProjectTile
              projectsCount={projects.length}
              showCta={showCta}
              order={order}
              isOnGrid
              project={project}
            />
            {index === 3 && showCta && <MidCta order={order} midCtaContent={midCtaContent} />}
          </React.Fragment>
        );
      })}
    </Masonry>
  );
}
MasonryLayout.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  midCtaContent: PropTypes.shape({}).isRequired,
};

/*
  Given an array = [elem0, elem1, elem2, elem3, elem4, elem5, elem6]
  we wish to render two columns arranged this way:
  |0||1|
  |2||3|
  |4||5|
  |6|

  Css computes a two-column layout in one block DOM element in following fashion:
  |0||4|
  |1||5|
  |2||6|
  |3|

  Inserting a CTA component in the middle result in splitting the layout, like:
  |0||2|
  |1||3|
  |CTA|
  |4||6|
  |5|

  We fix this by sorting the original array like: [elem0, elem2, elem4, elem6, elem1, elem3, elem5]
  or, in case of CTA component in the middle, we sort it like: [elem0, elem2, elem1, elem3, elem4, elem6, elem5]
  The mobile version renders everything in one column, top to bottom, so in order to render everything correctly,
  we have to switch to flex layout and manipulate css order rule.

  */
