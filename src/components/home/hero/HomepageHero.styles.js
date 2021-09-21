import styled from 'styled-components';
import Socials from '@root/components/icons/SocialsCollection';
import { Header1, Header4 } from '../../../styles/typography/headers';
import { ParagraphBody, ParagraphSmall } from '../../../styles/typography/paragraphs';

export const StyledHomepageHero = styled.section(
  ({ theme: { medias } }) => `
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media ${medias.mobile} {
    max-width: 55.0rem;
    min-width: 30.0rem;
    width: 100%;
  }
`,
);

export const Content = styled.div(
  ({ theme: { medias } }) => `
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;

  @media ${medias.mobile} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`,
);

export const TextSection = styled.div(
  ({ theme: { medias } }) => `
  min-width: 41.6rem;
  margin-top: 7.7rem;
  margin-left: 12.0rem;
  @media ${medias.mobile} {
    min-width: 30.0rem;
    margin-top: 4.0rem;
    margin-left: 0;
    padding: 0 2.4rem;
    order: 2;
  }
`,
);

export const HomepageHeroVideo = styled.video(
  ({ theme: { medias } }) => `
  width: 80.8rem;

  @media ${medias.mobile} {
    order: 1;
    width: 100%;
    max-width: 55.0rem;
  }
`,
);

export const StyledSocials = styled(Socials)(
  ({ theme: { medias, color } }) => `
  width: 103.7rem;
  height: 13.7rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-right: 12.0rem;
  padding-left: 5.6rem;

  background-color: ${color.white};

  box-shadow: 3.38443rem 5.58976rem 8.0rem rgba(97, 121, 139, 0.07),
    1.71337rem 2.82982rem 3.4875rem rgba(97, 121, 139, 0.04725),
    .0676885rem 1.11795rem 1.3rem rgba(97, 121, 139, 0.035),
    .0148069rem 2.44552rem 4.625rem rgba(97, 121, 139, 0.02275);
  border-radius: 1.6rem .0rem .0rem 1.6rem;

  @media ${medias.mobile} {
    width: 80%;
    height: 8.0rem;
    margin-top: 4.0rem;
    margin-right: auto;
    margin-left: auto;
    padding: 0;
    justify-content: space-around;
    border-radius: 1.6rem;
  }

  a {
    height: 4.8rem;
    display: flex;
    flex: row;
    align-items: center;

    text-decoration: none;

    color: ${color.navy};
    svg {
      transform: scale(2);
      margin-right: 2.4rem;
      margin-left: 2.4rem;

      @media ${medias.mobile} {
        transform: scale(1.5);
        margin: 0;
      }
    }
    @media ${medias.mobile} {
      height: 3.2rem;
      width: 3.2rem;
    }
  }
`,
);

export const Header = styled.h1(
  ({ theme: { medias } }) => `
  width: 100%;
  max-width: 512px;
  ${Header1};

  @media ${medias.mobile} {
    max-width: auto;
    ${Header4};
  }
`,
);
export const HomepageHeroImage = styled.img`
  width: 80.8rem;
  height: 50.5rem;
`;

export const Paragraph = styled.p(
  ({ theme: { medias, color } }) => `
  width: 100%;
  margin: 3.2rem 0;
  ${ParagraphBody};
  color: ${color.steel};

  @media ${medias.mobile} {
    margin: 2.4rem 0;

    ${ParagraphSmall};
  }
`,
);
