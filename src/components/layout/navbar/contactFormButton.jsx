const handleClick = (currPathname) => {
  if (currPathname === '/') {
    const contactForm = document.getElementById('contactForm');
    const navbarOffset = 88;

    if (contactForm) {
      const contactFormPosition = contactForm.getBoundingClientRect().top;

      contactForm.scrollIntoViewIfNeeded();

      if (contactFormPosition < navbarOffset) {
        window.scrollBy(0, contactFormPosition - navbarOffset);
      }
    }
  } else if (currPathname !== '/_error') {
    // do something
  }
};

export default handleClick;
