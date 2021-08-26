const handleClick = (currPathname, navbarHeight, toggleContactModal) => {
  if (currPathname === '/') {
    const contactForm = document.getElementById('contact-form');
    const navbarOffset = Number(navbarHeight.replace(/px$/, ''));

    if (contactForm) {
      const contactFormPosition = contactForm.getBoundingClientRect().top;
      window.scrollBy(0, contactFormPosition - navbarOffset);
    }
  } else {
    toggleContactModal(true);
  }
};

export default handleClick;
