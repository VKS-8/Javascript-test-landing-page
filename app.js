document.addEventListener('DOMContentLoaded', function() {
  const section = []

  // Populate the navigation links dynamically
  const navLinksContainer = document.querySelector('.navLinks');
  // Populate the navLinksContainer with navigation links
  // Function to create navigation links
  function createNavLink(element) {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = '#' + element;
    link.textContent = element;
    li.appendChild(link);
    navList.appendChild(li);
  }


  // Populate the section navigation links dynamically
  const sectionLinksContainer = document.querySelector('.asideLinks');
  // Add code to populate the sectionLinksContainer with section navigation links


window.addEventListener('scroll', setActive);

setActive();

function setActive() {
  // const triggerBottom = window.innerHeight / 20 * 19;
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    // Add and remove the "active" class when the section scrolls through view
    if (sectionTop > window.innerHeight || sectionTop + section.offsetHeight < 10) {
      section.classList.remove('active');
    } else {
      section.classList.add('active');
    }
  });
}

  // Handle the smooth scrolling functionality
  function handleSmoothScroll(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }

  // Add event listeners to the navigation links for smooth scrolling
  const navLinks = document.querySelectorAll('.navLinks a');
  navLinks.forEach(link => {
    link.addEventListener('click', handleSmoothScroll);
  });

  // Add event listeners to the aside navigation links for smooth scrolling
  const asideLinks = document.querySelectorAll('.asideLinks a');
  asideLinks.forEach(link => {
    link.addEventListener('click', handleSmoothScroll);
  });

  // Get the aside element
  const aside = document.getElementById('aside');

  // Function to toggle the aside visibility
  function toggleAside() {

      aside.classList.toggle('showAside');
      toggleAsideButton.classList.toggle('asideOpened openClose');

    }

  // Add an event listener to the button that triggers the aside to open via toggle
  const toggleAsideButton = document.getElementById('toggleAsideBtn');
  toggleAsideButton.addEventListener('click', toggleAside);

  // Add event listener to toggle the active state of aside navigation links
  window.addEventListener('scroll', () => {
    if (isSectionVisible(section)) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
    // Add code to determine the active section based on scroll position
    // and update the active state of section navigation links accordingly
  });

  // Add event listener to show/hide the scroll-to-top button
  const scrollToTopBtn = document.getElementById('scrollToTop');
  window.addEventListener('scroll', () => {
    // Add code to show/hide the scrollToTopBtn based on scroll position
  });

  // Add event listener to scroll to top when the button is clicked
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});