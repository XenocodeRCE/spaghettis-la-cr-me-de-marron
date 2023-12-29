// content.js

function modifyHTML() {
  console.log('Content script is running on https://www.annabac.com/');
  console.log('Replacing partial content');

  const elements = document.querySelectorAll('.inner-content[data-nosnippet][style*="max-height:"]');

  elements.forEach((element) => {
    // 1. Remove "partial-content" from the class
    element.classList.remove('partial-content');

    
    // 2. Set max-height to 10000
    element.style.setProperty('max-height', '10000px', 'important');
  });


	// Remove elements with class "region-after_content"
  const regionElements = document.querySelectorAll('.region-after_content');
  regionElements.forEach((regionElement) => {
    regionElement.remove();
  }); 
  const headerElements = document.querySelectorAll('.region-preheader');
  headerElements.forEach((headerElement) => {
    headerElement.remove();
  });
  
  console.log('done.');
}

// Ensure the DOM content is fully loaded before running the modification
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', modifyHTML);
} else {
  modifyHTML();
}
