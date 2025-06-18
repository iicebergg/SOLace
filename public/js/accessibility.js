// Accessibility features implementation

// DOM Elements
const themeButtons = document.querySelectorAll('.theme-btn');
const increaseFontBtn = document.getElementById('increase-font');
const decreaseFontBtn = document.getElementById('decrease-font');
const fontSizeValue = document.getElementById('font-size-value');
const reduceMotionCheckbox = document.getElementById('reduce-motion');
const screenReaderOptCheckbox = document.getElementById('screen-reader-opt');

// Font size management
const fontSizes = {
 small: { value: 'small', display: 'Small', size: 14 },
 medium: { value: 'medium', display: 'Medium', size: 16 },
 large: { value: 'large', display: 'Large', size: 18 },
 xlarge: { value: 'xlarge', display: 'Extra Large', size: 20 }
};

// Current state
let currentFontSizeIndex = 1; // Default is medium (index 1)

// Initialize accessibility settings
function initAccessibilitySettings() {
 // Load saved preferences if available
 const savedPreferences = JSON.parse(localStorage.getItem('userPreferences') || '{}');

 // Set defaults if no saved preferences
 const preferences = {
   theme: savedPreferences.theme || 'black-on-white',
   fontSize: savedPreferences.fontSize || 'medium',
   reduceMotion: savedPreferences.reduceMotion || false,
   screenReaderOptimized: savedPreferences.screenReaderOptimized || false
 };

 // Apply theme
 setTheme(preferences.theme);

 // Apply font size
 const sizeKeys = Object.keys(fontSizes);
 currentFontSizeIndex = sizeKeys.indexOf(preferences.fontSize);
 if (currentFontSizeIndex === -1) currentFontSizeIndex = 1; // Default to medium if not found
 setFontSize(sizeKeys[currentFontSizeIndex]);

 // Apply motion preferences
 if (preferences.reduceMotion) {
   reduceMotionCheckbox.checked = true;
   document.body.classList.add('reduce-motion');
 }

 // Apply screen reader optimizations
 if (preferences.screenReaderOptimized) {
   screenReaderOptCheckbox.checked = true;
   document.body.classList.add('screen-reader-optimized');
 }

 // Set up event listeners
 setupAccessibilityEventListeners();
}

// Set up accessibility event listeners
function setupAccessibilityEventListeners() {
 // Theme selection
 themeButtons.forEach(button => {
   button.addEventListener('click', () => {
     const theme = button.getAttribute('data-theme');
     setTheme(theme);
   });
 });

 // Font size controls
 if (increaseFontBtn) {
   increaseFontBtn.addEventListener('click', () => {
     changeFontSize(1);
   });
 }

 if (decreaseFontBtn) {
   decreaseFontBtn.addEventListener('click', () => {
     changeFontSize(-1);
   });
 }

 // Motion toggle
 if (reduceMotionCheckbox) {
   reduceMotionCheckbox.addEventListener('change', () => {
     toggleReduceMotion(reduceMotionCheckbox.checked);
   });
 }

 // Screen reader optimizations toggle
 if (screenReaderOptCheckbox) {
   screenReaderOptCheckbox.addEventListener('change', () => {
     toggleScreenReaderOpt(screenReaderOptCheckbox.checked);
   });
 }
}

// Set theme
function setTheme(theme) {
 // Remove all existing theme classes
 document.body.classList.remove(
   'theme-black-on-white',
   'theme-black-on-cream', 
   'theme-black-on-light-blue',
   'theme-black-on-light-magenta',
   'theme-white-on-black',
   'theme-yellow-on-blue',
   'theme-gray-on-green'
 );

 // Add the selected theme class
 document.body.classList.add(`theme-${theme}`);

 // Update theme buttons state
 themeButtons.forEach(button => {
   if (button.getAttribute('data-theme') === theme) {
     button.classList.add('active');
   } else {
     button.classList.remove('active');
   }
 });

 // Save preference
 saveAccessibilityPreference('theme', theme);
}

// Change font size
function changeFontSize(direction) {
 const sizeKeys = Object.keys(fontSizes);

 // Calculate new index
 let newIndex = currentFontSizeIndex + direction;

 // Bounds checking
 if (newIndex < 0) newIndex = 0;
 if (newIndex >= sizeKeys.length) newIndex = sizeKeys.length - 1;

 // Only proceed if there's a change
 if (newIndex !== currentFontSizeIndex) {
   currentFontSizeIndex = newIndex;
   const newSize = sizeKeys[currentFontSizeIndex];
   setFontSize(newSize);
 }
}

// Set font size
function setFontSize(sizeKey) {
 // Remove all existing font size classes
 document.body.classList.remove('font-size-small', 'font-size-medium', 'font-size-large', 'font-size-xlarge');
 
 // Add the new font size class
 document.body.classList.add(`font-size-${sizeKey}`);

 // Update display text
 if (fontSizeValue) {
   fontSizeValue.textContent = fontSizes[sizeKey].display;
 }

 // Actually set the root font size
 document.documentElement.style.fontSize = `${fontSizes[sizeKey].size}px`;

 // Save preference
 saveAccessibilityPreference('fontSize', sizeKey);
}

// Toggle reduce motion
function toggleReduceMotion(enabled) {
 if (enabled) {
   document.body.classList.add('reduce-motion');
 } else {
   document.body.classList.remove('reduce-motion');
 }

 // Save preference
 saveAccessibilityPreference('reduceMotion', enabled);
}

// Toggle screen reader optimizations
function toggleScreenReaderOpt(enabled) {
 if (enabled) {
   document.body.classList.add('screen-reader-optimized');
 } else {
   document.body.classList.remove('screen-reader-optimized');
 }

 // Save preference
 saveAccessibilityPreference('screenReaderOptimized', enabled);
}

// Save a single accessibility preference
function saveAccessibilityPreference(key, value) {
 // Get current preferences
 const preferences = JSON.parse(localStorage.getItem('userPreferences') || '{}');

 // Update the specific preference
 preferences[key] = value;

 // Save back to localStorage
 localStorage.setItem('userPreferences', JSON.stringify(preferences));
}

// Add keyboard navigation enhancements
function enhanceKeyboardNavigation() {
 // Add tabindex to all interactive elements that might not have it
 const interactiveElements = document.querySelectorAll('button, a, input, select, textarea, [role="button"]');

 interactiveElements.forEach(element => {
   if (!element.hasAttribute('tabindex')) {
     element.setAttribute('tabindex', '0');
   }
 });

 // Add keyboard event listeners for custom components like the quiz options
 document.querySelectorAll('.option').forEach(option => {
   option.addEventListener('keydown', (event) => {
     // Enter or Space activates the option
     if (event.key === 'Enter' || event.key === ' ') {
       event.preventDefault();

       // Simulate a click on the option
       const clickEvent = new MouseEvent('click', {
         bubbles: true,
         cancelable: true,
         view: window
       });

       option.dispatchEvent(clickEvent);
     }
   });
 });
}

// Add ARIA attributes to improve screen reader experience
function enhanceAriaAttributes() {
 // Add appropriate ARIA roles to main sections
 const header = document.querySelector('header');
 const nav = document.querySelector('nav');
 const main = document.querySelector('main');
 const footer = document.querySelector('footer');
 
 if (header) header.setAttribute('role', 'banner');
 if (nav) nav.setAttribute('role', 'navigation');
 if (main) main.setAttribute('role', 'main');
 if (footer) footer.setAttribute('role', 'contentinfo');

 // Add ARIA labels to navigation buttons
 document.querySelectorAll('.nav-btn').forEach(button => {
   button.setAttribute('aria-label', `Go to ${button.textContent.trim()} page`);
 });

 // Add ARIA for the test section
 const questionCounter = document.getElementById('question-counter');
 if (questionCounter) {
   questionCounter.setAttribute('aria-live', 'polite');
 }

 // Add ARIA for feedback messages
 const feedbackMessage = document.getElementById('feedback-message');
 if (feedbackMessage) {
   feedbackMessage.setAttribute('aria-live', 'assertive');
 }
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
 initAccessibilitySettings();
 enhanceKeyboardNavigation();
 enhanceAriaAttributes();
});