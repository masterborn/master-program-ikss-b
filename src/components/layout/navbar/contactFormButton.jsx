const handleClick = (router) => {
  if (router.pathname === '/') {
    const contactForm = document.getElementById('contactForm');
    const navbarOffset = 88;

    if (contactForm) {
      const contactFormPosition = contactForm.getBoundingClientRect().top;

      contactForm.scrollIntoViewIfNeeded();

      if (contactFormPosition < navbarOffset) {
        window.scrollBy(0, contactFormPosition - navbarOffset);
      }
    }
  } else if (router.pathname !== '/_error') {
    // do something
  }
};

export default handleClick;
