/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addFormText } from '@root/redux/actions/contactFormActions';
import { getPagesDataMockup } from '@root/clients/contentful';
import mapData from '@root/dataMappers/contentful';
import ProjectsSection from '@root/components/home/projects/ProjectsSection';
import PartnersSection from '@root/components/home/partnersList/PartnersSection';
import TopSection from '../components/home/topSection';
import ValuesSection from '../components/home/valuesSection';
import ContactForm from '../components/contactForm';

export default function index({ homepageData: { partners, basicContent, contactForm, projects } }) {
  const dispatch = useDispatch();

  const { 'homepage-partners-text': partnersText } = basicContent;

  const { 'contact-form-text': contactFormText } = contactForm;

  useEffect(() => {
    dispatch(addFormText(contactFormText));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <TopSection />
      <ValuesSection />
      <ProjectsSection projects={projects} />
      <PartnersSection partners={partners} partnersText={partnersText} />
      <ContactForm />
    </div>
  );
}

export async function getStaticProps() {
  const resJson = await getPagesDataMockup();
  const pagesData = mapData(resJson);

  const {
    basicContent: { homepage: basicContent, common, undefined: contactForm },
    projects,
    partnerLogos: partners,
  } = pagesData;
  const homepageData = { basicContent, common, contactForm, projects, partners };

  return {
    props: {
      homepageData,
    },
  };
}
