document.addEventListener('DOMContentLoaded', function() {

  // Function to update navigation links
  function updateNavLinks(sectionTitle) {
  // Populate the navigation links dynamically
  const dropdownMenu = document.querySelectorAll('.hasDropdown');
  const navLink = document.createElement('a');
  navLink.href = `#${sectionTitle.toLowerCase().replace(/\s/g,'-')}`;
  navLink.textContent = sectionTitle;
  dropdownMenu.appendChild(navLink);
}

// Set active state on sections as they scroll into view
window.addEventListener('scroll', setActive);

setActive();

function setActive() {
  const sectionsActive = document.querySelectorAll('section');

  sectionsActive.forEach(section => {
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
    const challengeContainer = document.querySelector('#challengeContainer');

    // Create the new section
    const newSection = document.createElement('section');
    const newSectionId = sectionTitle.toLowerCase().replace(/\s/g,'-'); // Create Id based on section title

    // Set the id attribute of the new section
    newSection.id = newSectionId;

    // Create the section title
    const title = document.createElement('h2');
    title.textContent = sectionTitle;
    newSection.appendChild(title);

    // Create the section content
    const content = document.createElement('p');
    content.textContent = `${sectionContent}`;
    newSection.appendChild(content);

  // Create an image element
  if (sectionImage) {
    const image = document.createElement('img');
    image.src = sectionImage;
    newSection.appendChild(image);
  }

  // Append the new section to the main element
  challengeContainer.appendChild(newSection);
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
      let reader = new FileReader();
      reader.onload = function(e) {
        sectionImage = e.target.result;
        // Call the appendSection function with the user-provided section title, content, and image
        appendSection(sectionTitle, sectionContent, sectionImage);
      };
      reader.readAsDataURL(sectionImageInput.files[0]);
    } else {
        //Call the appendSection function with the user-provided section ID, title, content
        appendSection(sectionTitle, sectionContent);
    }

    updateNavLinks(sectionTitle);

    // Clear the form inputs
    sectionTitleInput.value = '';
    sectionContentInput.value = '';
    sectionImageInput.value = '';
  });

  // Checks for visible section
  function isSectionVisible(section) {
    const rect = section.getBoundingClientRect();
    return rect.top < window.innerHeight / 2 && rect.bottom >= 0;
  }

  // Add event listener to toggle the active state of navigation links
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navLinks a');
    const asideLinks = document.querySelectorAll('.asideLinks a');


      sections.forEach((section, index) => {
        const link = navLinks[index];
        link.removeAttribute('aria-current');
        link.classList.remove('active'); // Remove it
          if (isSectionVisible(section)) {
              link.setAttribute('aria-current', 'page');
              link.classList.add('active'); // Add active state to current section top nav link
            } else {
              link.removeAttribute('aria-current');
              link.classList.remove('active'); // Remove it
          }
      });

    asideLinks.forEach((link, index) => {
        if (isSectionVisible(sections[index])) {
          link.setAttribute('aria-current', 'page');
          link.classList.add('active'); // Add active state to current section top aside nav link
        } else {
          link.removeAttribute('aria-current');
          link.classList.remove('active'); // Remove it
        }
    });

    setActive();
  });


  // Add event listener to show/hide the scroll-to-top button
  const scrollToTopBtn = document.getElementById('scrollToTop');
  window.addEventListener('scroll', () => {
    if(window.scrollY > window.innerHeight) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });

  // Add event listener to scroll to top when the button is clicked
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});