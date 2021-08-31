import styled from 'styled-components';

const ProjectsGridContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-content: space-between;
  height: ${(props) => `${props.columnWidth}px`};
  width: 1200px;

  &&::before,
  &&:after {
    content: '';
    flex-basis: 100%;
    width: 0;
    order: 1;
  }
`;

export default ProjectsGridContainer;
