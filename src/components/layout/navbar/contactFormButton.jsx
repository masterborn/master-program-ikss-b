export const scrollToContactForm = (navbarHeight) => {
  const contactForm = document.getElementById('contact-form');
  const navbarOffset = Number(navbarHeight.replace(/px$/, ''));

  if (contactForm) {
    const contactFormPosition = contactForm.getBoundingClientRect().top;
    window.scrollBy(0, contactFormPosition - navbarOffset);
  }
};

const handleClick = (currPathname, navbarHeight, toggleContactModal) => {
  if (currPathname === '/') {
    scrollToContactForm(navbarHeight);
  } else {
    toggleContactModal(true);
  }
};

export default handleClick;
