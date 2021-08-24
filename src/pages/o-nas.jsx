import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addFormText } from '@root/redux/actions/contactFormActions';
import { getPagesDataMockup } from '@root/clients/contentful';
import mapData from '@root/dataMappers/contentful';

export default function AboutUs({ aboutUsData: { contactForm } }) {
  const dispatch = useDispatch();

  const { 'contact-form-text': contactFormText } = contactForm;

  useEffect(() => {
    dispatch(addFormText(contactFormText));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>About us</div>;
}

export async function getStaticProps() {
  const resJson = await getPagesDataMockup();
  const pagesData = mapData(resJson);

  const {
    basicContent: { undefined: contactForm },
  } = pagesData;
  const aboutUsData = { contactForm };

  return {
    props: {
      aboutUsData,
    },
  };
}

AboutUs.propTypes = {
  aboutUsData: PropTypes.shape({
    contactForm: PropTypes.shape({
      'contact-form-text': PropTypes.shape({}),
    }),
  }).isRequired,
};
