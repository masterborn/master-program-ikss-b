import React from 'react';
import ProjectTile from '../projectTile/ProjectTile';
import ProjectsGridContainer from './projectsGrid.styles';

export default function projectsGrid({ projectsData }) {
  function sortProjectsByYear() {
    const sortedProjects = {};
    projectsData.forEach((project) => {
      const date = new Date(project.date);
      const year = date.getFullYear();
      sortedProjects[year] = [...(sortedProjects[year] || []), project];
    });
    return sortedProjects;
  }
  console.log(projectsData);
  const sortedProjects = sortProjectsByYear();

  function orderProjects(projects) {
    return projects.sort((a, b) => {
      if (a.order === b.order) {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
      }
      return (b.order || 0) - (a.order || 0);
    });
  }

  console.log(sortedProjects);
  let mockup = orderProjects(sortedProjects['2020']);
  mockup = mockup.slice(0, 7);
  const columnWidth = 800 * Math.ceil(mockup.length / 2);
  console.log(mockup);

  return (
    <ProjectsGridContainer columnWidth={columnWidth}>
      {mockup.map((project) => (
        <ProjectTile key={project.title} isOnGrid project={project} />
      ))}
    </ProjectsGridContainer>
  );
}
