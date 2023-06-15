document.addEventListener('DOMContentLoaded', function() {
  const section = []

  // Function to update navigation links
  function updateNavLinks(sectionTitle) {
  // Populate the navigation links dynamically
  const topNav = document.querySelector('#topNav');
  const topNavLink = document.createElement('a');
  topNavLink.href = `#${sectionTitle.toLowerCase().replace(/\s/g,'-')}`;
  topNavLink.textContent = sectionTitle;
  topNav.appendChild(topNavLink);


  // Populate the aside navigation links dynamically
  const asideNav = document.querySelector('#aside');
  const asideNavLink = document.createElement('a');
  asideNavLink.href = `#${sectionTitle.toLowerCase().replace(/\s/g,'-')}`;
  asideNavLink.textContent = sectionTitle;
  asideNav.appendChild(asideNavLink);

  // Update the dropdown in the top navigation
  updateDropdown(sectionTitle);

}

// Update the nav dropdown in the top navigation
function updateDropdown(sectionTitle) {
  const dropdownMenu = document.querySelector('#topNavDropdown');


  dropdownItem.href = `#${sectionTitle.toLowerCase().replace(/\s/g,'-')}`;
  droptdownItem.textContent = sectionTitle;
}

// Set active state on sections as they scroll into view
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

  // Function to append a new section to the page
  function appendSection(sectionTitle, sectionContent, sectionImage) {
    const sectionContainer = document.querySelector('#sectionContainer');

  // Create the section title
  const title = document.createElement('h2');
  title.textContent = sectionTitle;
  sectionContainer.appendChild(title);

  // Create the section content
  const content = document.createElement('p');
  content.textContent = `This is the content of ${sectionTitle.toLowerCase()}.`;
  sectionContainer.appendChild(content);

  // Create an image element
  if (sectionImage) {
    const image = document.createElement('img');
    image.src = sectionImage;
    sectionContainer.appendChild(image);
  }

  // Append the new section to the main element
  sectionContainer.appendChild(section);
  }

  // Handle form submission
  document.querySelector('#sectionForm').addEventListener('submit', function(event ) {
    event.preventDefault();

    const sectionTitleInput = document.querySelector('#sectionTitle');
    const sectionContentInput = document.querySelector('#sectionContent');
    const sectionImageInput = document.querySelector('#sectionImage');

    const sectionTitle = sectionTitleInput.value;
    const sectionContent = sectionContentInput.value;
    const sectionImage = null;

    if (sectionImageInput.files && sectionImageInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function(e) {
        sectionImage = e.target.result;
        // Call the appendSection function with the user-provided section ID, title, content, and image
        appendSection(sectionId, sectionTitle, sectionContent, sectionImage);
      };
      reader.readAsDataURL(sectionImageInput.files[0]);
    } else {
        //Call the appendSection function with the user-provided section ID, title, content
        appendSection(sectionId, sectionTitle, sectionContent, sectionImage);
    }

    // Clear the form inputs
    sectionIdInput.value = '';
    sectionTitleInput.value = '';
    sectionContentInput.value = '';
    sectionImageInput.value = '';
  });

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