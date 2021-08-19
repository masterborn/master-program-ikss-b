import PrimaryButton from '@root/components/buttons/primaryButton';
import SecondaryButton from '@root/components/buttons/secondaryButton';
import { useState } from 'react';
import Link from 'next/link';
import ProjectVideo from './ProjectVideo';
import projects from './projects.json';

import {
  ProjectDescription,
  Container,
  ProjectArticle,
  ProjectButton,
  ProjectDate,
  ProjectHeader,
  ProjectMediaContainer,
  ProjectsButtonsContainer,
  ProjectSummary,
  ProjectTitle,
  SectionHeader,
  ProjectImage,
} from './ProjectsSection.styles';

function sortProjects() {
  // once API integration is up, this function will belong in contentful mapper
  const homepageArticles = projects.filter((project) => project.showOnHomepage);
  homepageArticles.forEach((project, index) => {
    if (!project.order) homepageArticles[index].order = 0;
  });
  homepageArticles.sort((a, b) => b.order - a.order);
  const sortedArticles = homepageArticles.slice(0, 3);
  return sortedArticles;
}
export default function ProjectsSection() {
  // once API integration is up, take projects' data as props to func component,
  // and sort them using imported function from dataMappers/contentful.js
  const homepageArticles = sortProjects();
  const [currentArticle, setArticle] = useState(homepageArticles[0]);
  const {
    title,
    date,
    image: { url: imageUrl, title: imgTitle },
    linkUrl,
    video_url: videoUrl,
  } = currentArticle;

  function switchArticle(event) {
    const articleTitle = event.target.value;
    const newArticle = homepageArticles.find((article) => article.title === articleTitle);
    setArticle(newArticle);
  }
  const linkIsFromFacebook = /^(https:\/\/)?(www.)?facebook\.com\/.*/.test(linkUrl);
  return (
    <Container id="projects">
      <SectionHeader>Najnowsze Projekty</SectionHeader>
      <ProjectsButtonsContainer>
        {homepageArticles.map(({ title: articleTitle }) => (
          <ProjectButton
            key={articleTitle}
            value={articleTitle}
            onClick={switchArticle}
            clicked={articleTitle === title}
          >
            {articleTitle}
          </ProjectButton>
        ))}
      </ProjectsButtonsContainer>
      <ProjectArticle>
        <ProjectMediaContainer>
          {videoUrl ? (
            <ProjectVideo url={videoUrl} />
          ) : (
            <ProjectImage width={997} height={579} alt={imgTitle} src={`https:\\${imageUrl}`} />
          )}
        </ProjectMediaContainer>
        <ProjectSummary>
          <ProjectHeader>
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectDate>{date}</ProjectDate>
          </ProjectHeader>
          <ProjectDescription>nic</ProjectDescription>
          {linkUrl && (
            <a href={linkUrl}>
              <PrimaryButton withIcon={linkIsFromFacebook}>Podsumowanie wydarzenia</PrimaryButton>
            </a>
          )}
        </ProjectSummary>
      </ProjectArticle>
      <Link href="/projekty">
        <SecondaryButton isBig>Zobacz wszystkie projekty</SecondaryButton>
      </Link>
    </Container>
  );
}
