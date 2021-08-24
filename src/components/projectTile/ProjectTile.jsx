import React from 'react';
import PropTypes from 'prop-types';
import { convertRichTextToReactComponent } from '@root/dataMappers/contentful';
import PrimaryButton from '../buttons/primaryButton';
import ProjectVideo from './ProjectVideo';
import {
  ProjectArticle,
  ProjectDate,
  ProjectHeader,
  ProjectSummary,
  ProjectTitle,
  ProjectImage,
  ProjectMediaContainer,
} from './ProjectTile.styles';
import { ParagraphBody } from '../typography/paragraphs';

export default function ProjectTile({ project }) {
  const { title, date, video_url: videoUrl, image, linkUrl, description } = project;
  const linkIsFromFacebook = /^(https:\/\/)?(www.)?f(b||acebook)\.com\/.*/.test(linkUrl);
  const ProjectDescription = convertRichTextToReactComponent(ParagraphBody, description);

  return (
    <ProjectArticle>
      <ProjectMediaContainer>
        {videoUrl ? (
          <ProjectVideo url={videoUrl} />
        ) : (
          <ProjectImage width={997} height={579} alt={image.title} src={`https:\\${image.url}`} />
        )}
      </ProjectMediaContainer>
      <ProjectSummary>
        <ProjectHeader>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectDate>{date}</ProjectDate>
        </ProjectHeader>
        {ProjectDescription}
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
