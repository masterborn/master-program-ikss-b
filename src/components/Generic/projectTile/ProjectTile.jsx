import React from 'react';
import PropTypes from 'prop-types';

import { convertRichTextToReactComponent } from '@dataMappers/contentful';
import PrimaryButton from '@buttons/primaryButton';
import {
  ProjectDescription,
  ProjectArticle,
  ProjectDate,
  ProjectHeader,
  ProjectSummary,
  ProjectTitle,
  ProjectImage,
  ProjectMediaContainer,
} from './ProjectTile.styles';
import ProjectVideo from './ProjectVideo';

export default function ProjectTile({ project, isOnGrid, order }) {
  const { title, date, image, videoUrl, linkUrl, description } = project;
  const linkIsFromFacebook = /^(https:\/\/)?(www.)?f(b||acebook)\.com\/.*/.test(linkUrl);
  return (
    <ProjectArticle id={title} order={order} isOnGrid={isOnGrid}>
      <ProjectMediaContainer>
        {videoUrl ? (
          <ProjectVideo isOnGrid={isOnGrid} url={videoUrl} />
        ) : (
          <ProjectImage alt={image.title} src={`https:\\${image.url}`} />
        )}
      </ProjectMediaContainer>
      <ProjectSummary isOnGrid={isOnGrid}>
        <ProjectHeader isOnGrid={isOnGrid}>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectDate>{date}</ProjectDate>
        </ProjectHeader>
        {convertRichTextToReactComponent(ProjectDescription, description)}
        {linkUrl && (
          <a href={linkUrl}>
            <PrimaryButton withIcon={linkIsFromFacebook}>Podsumowanie wydarzenia</PrimaryButton>
          </a>
        )}
      </ProjectSummary>
    </ProjectArticle>
  );
}

ProjectTile.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    videoUrl: PropTypes.string,
    date: PropTypes.string.isRequired,
    image: PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
    }),
    linkUrl: PropTypes.string,
    linkCaption: PropTypes.string,
    video_url: PropTypes.string,
    showOnHomepage: PropTypes.bool,
    description: PropTypes.shape({
      data: PropTypes.shape({}),
      content: PropTypes.arrayOf(PropTypes.object),
      nodeType: PropTypes.string,
    }),
  }).isRequired,
  isOnGrid: PropTypes.bool,
  order: PropTypes.number,
};

ProjectTile.defaultProps = {
  isOnGrid: false,
  order: 0,
};
