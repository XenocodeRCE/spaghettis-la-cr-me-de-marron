// content.js

function modifyHTML() {
  console.log('Content script is running on https://www.annabac.com/');
  console.log('Replacing partial content');

 // Modify elements with class "partial-content inner-content" and optional style "max-height"
  const elements = document.querySelectorAll('.partial-content.inner-content[data-nosnippet]');
  elements.forEach((element) => {
    // 1. Remove "partial-content" from the class
    element.classList.remove('partial-content');

    // 2. Check if max-height style is present
    if (element.style.maxHeight) {
      // If present, set max-height to 10000
      element.style.setProperty('max-height', '10000px', 'important');
    } else {
      // If not present, add style max-height: 10000px
      element.style.cssText += 'max-height: 10000px !important;';
    }
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
