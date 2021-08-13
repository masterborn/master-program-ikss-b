const handleClick = (currPathname, navbarHeight) => {
  if (currPathname === '/') {
    const contactForm = document.getElementById('contactForm');
    const navbarOffset = Number(navbarHeight.replace(/px$/, ''));

    if (contactForm) {
      const contactFormPosition = contactForm.getBoundingClientRect().top;
      window.scrollBy(0, contactFormPosition - navbarOffset);
    }
  } else {
    // do something
  }
};

export default handleClick;
