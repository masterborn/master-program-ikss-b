import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addFormText } from '@root/redux/actions/contactFormActions';
import { getPagesDataMockup } from '@root/clients/contentful';
import mapData from '@root/dataMappers/contentful';

export default function Custom404({ custom404Data: { contactForm } }) {
  const dispatch = useDispatch();

  const { 'contact-form-text': contactFormText } = contactForm;

  useEffect(() => {
    dispatch(addFormText(contactFormText));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>You have reached the world&apos;s edge, none but devils play past here</div>;
}

export async function getStaticProps() {
  const resJson = await getPagesDataMockup();
  const pagesData = mapData(resJson);

  const {
    basicContent: { undefined: contactForm },
  } = pagesData;
  const custom404Data = { contactForm };

  return {
    props: {
      custom404Data,
    },
  };
}

Custom404.propTypes = {
  custom404Data: PropTypes.shape({
    contactForm: PropTypes.shape({
      'contact-form-text': PropTypes.shape({}),
    }),
  }).isRequired,
};
