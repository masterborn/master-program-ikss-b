import React from 'react';
import PropTypes from 'prop-types';
import { convertRichTextToReactComponent } from '@root/dataMappers/contentful';
import PrimaryButton from '../buttons/primaryButton';
import ProjectVideo from './ProjectVideo';
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

export default function ProjectTile({ project }) {
  const { title, date, video_url: videoUrl, image, linkUrl, description } = project;
  const linkIsFromFacebook = /^(https:\/\/)?(www.)?f(b||acebook)\.com\/.*/.test(linkUrl);
  return (
    <ProjectArticle>
      <ProjectMediaContainer>
        {videoUrl ? (
          <ProjectVideo url={videoUrl} />
        ) : (
          <ProjectImage alt={image.title} src={`https:\\${image.url}`} />
        )}
      </ProjectMediaContainer>
      <ProjectSummary>
        <ProjectHeader>
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
};
