const handleClick = (currPathname, navbarHeight) => {
  if (currPathname === '/') {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
      const contactFormPosition = contactForm.getBoundingClientRect().top;
      window.scrollBy(0, contactFormPosition - navbarHeight);
    }
  } else {
    // do something
  }
};

export default handleClick;
