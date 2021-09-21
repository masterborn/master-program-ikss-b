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
function mapProjectsToCollection(projectsData) {
  // maps to collection in form: [[year1], [year2],[year3]]
  const projectsCollection = [];
  projectsData.forEach((project) => {
    const date = new Date(project.date);
    const year = date.getFullYear();
    projectsCollection[year] = [...(projectsCollection[year] || []), project];
  });
  return projectsCollection;
}

function orderCollectionByYear(projectsArray) {
  const orderedSubcollections = projectsArray.sort((a, b) => {
    const dateA = new Date(a[0].date);
    const dateB = new Date(b[0].date);
    return dateB.getFullYear() - dateA.getFullYear();
  });
  return orderedSubcollections.map((subcollection) => orderProjects(subcollection));
}

export default function sortProjectsByYear(projectsData) {
  const projectsCollection = mapProjectsToCollection(projectsData);
  const orderedCollection = orderCollectionByYear(projectsCollection);
  return orderedCollection.slice(0, 3);
}
