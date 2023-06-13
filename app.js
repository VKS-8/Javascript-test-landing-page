document.addEventListener('DOMContentLoaded', function() {
  const section = []
  // Populate the navigation links dynamically
  const navLinksContainer = document.querySelector('.nav-links');
  // Populate the navLinksContainer with navigation links
  // Function to create navigation links
  function createNavLink(element) {
    var li = document.createElement('li');
    var link = document.createElement('a');
    link.href = '#' + element;
    link.textContent = element;
    li.appendChild(link);
    navList.appendChild(li);
  }


  // Populate the section navigation links dynamically
  const sectionLinksContainer = document.querySelector('.section-links');
  // Add code to populate the sectionLinksContainer with section navigation links

  // Handle the smooth scrolling functionality
  function handleSmoothScroll(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }

  // Add event listeners to the navigation links for smooth scrolling
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', handleSmoothScroll);
  });

  // Add event listeners to the section navigation links for smooth scrolling
  const sectionLinks = document.querySelectorAll('.section-links a');
  sectionLinks.forEach(link => {
    link.addEventListener('click', handleSmoothScroll);
  });

  // Get the aside element
  const aside = document.getElementById('section-nav');

  // Function to toggle the aside visibility
  function toggleAside() {
    aside.classList.toggle('show-aside');
  }

  // Add an event listener to the button that triggers the aside toggle
  const toggleButton = document.getElementById('toggle-aside-btn');
  toggleButton.addEventListener('click', toggleAside);

  // Add event listener to toggle the active state of section navigation links
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
  const scrollToTopBtn = document.getElementById('scroll-to-top');
  window.addEventListener('scroll', () => {
    // Add code to show/hide the scrollToTopBtn based on scroll position
  });

  // Add event listener to scroll to top when the button is clicked
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});