const handleClick = (currPathname, navbarHeight, openContactModal) => {
  if (currPathname === '/') {
    const contactForm = document.getElementById('contact-form');
    const navbarOffset = Number(navbarHeight.replace(/px$/, ''));

    if (contactForm) {
      const contactFormPosition = contactForm.getBoundingClientRect().top;
      window.scrollBy(0, contactFormPosition - navbarOffset);
    }
  } else {
    openContactModal();
  }
};

export default handleClick;
