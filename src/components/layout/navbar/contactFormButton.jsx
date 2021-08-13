const handleClick = (currPathname, navbarHeight) => {
  if (currPathname === '/') {
    const contactForm = document.getElementById('contactForm');
    const navbarOffset = Number(navbarHeight.replace(/px$/, ''));

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
