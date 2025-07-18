const themeButtons = document.querySelectorAll('.theme-btn');
const increaseFontBtn = document.getElementById('increase-font');
const decreaseFontBtn = document.getElementById('decrease-font');
const fontSizeValue = document.getElementById('font-size-value');

// Font size management
const fontSizes = {
  small: { value: 'small', display: 'Small', size: 14 },
  medium: { value: 'medium', display: 'Medium', size: 16 },
  large: { value: 'large', display: 'Large', size: 18 },
  xlarge: { value: 'xlarge', display: 'Extra Large', size: 20 }
};

// Current state
let currentFontSizeIndex = 1; // medium (index 1)

// Initialize accessibility settings
function initAccessibilitySettings() {
  console.log('Initializing accessibility settings...');
  
  // Load saved preferences if available
  const savedPreferences = JSON.parse(localStorage.getItem('userPreferences') || '{}');

  // Set defaults if no saved preferences
  const preferences = {
    theme: savedPreferences.theme || 'black-on-white',
    fontSize: savedPreferences.fontSize || 'medium',
  };

  console.log('Loaded preferences:', preferences);

  // Apply theme
  setTheme(preferences.theme);

  // Apply font size
  const sizeKeys = Object.keys(fontSizes);
  currentFontSizeIndex = sizeKeys.indexOf(preferences.fontSize);
  if (currentFontSizeIndex === -1) currentFontSizeIndex = 1; // Default to medium if not found
  setFontSize(sizeKeys[currentFontSizeIndex]);

  setupAccessibilityEventListeners();
}

// Set up accessibility event listeners
function setupAccessibilityEventListeners() {
  console.log('Setting up accessibility event listeners...');
  
  // Theme selection
  themeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const theme = button.getAttribute('data-theme');
      console.log('Theme button clicked:', theme);
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

}

// Set theme
function setTheme(theme) {
  console.log('Setting theme to:', theme);
  
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
  
  console.log('Applied theme class:', `theme-${theme}`);
  console.log('Current body classes:', document.body.className);

  // Update theme buttons state
  themeButtons.forEach(button => {
    if (button.getAttribute('data-theme') === theme) {
      button.classList.add('active');
      console.log('Set active theme button:', theme);
    } else {
      button.classList.remove('active');
    }
  });

  // Save preference
  saveAccessibilityPreference('theme', theme);
  
  // Force a repaint to apply theme changes immediately
  document.body.style.display = 'none';
  document.body.offsetHeight; // Trigger reflow
  document.body.style.display = '';
  
  console.log('Theme change complete');
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
  console.log('Setting font size to:', sizeKey);
  
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

// Save a single accessibility preference
function saveAccessibilityPreference(key, value) {
  // Get current preferences
  const preferences = JSON.parse(localStorage.getItem('userPreferences') || '{}');

  // Update the specific preference
  preferences[key] = value;

  // Save back to localStorage
  localStorage.setItem('userPreferences', JSON.stringify(preferences));
  
  console.log('Saved accessibility preference:', key, '=', value);
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
  document.addEventListener('click', () => {
    // Re-add keyboard listeners for dynamically created options
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
  console.log('Accessibility module initializing...');
  
  // Small delay to ensure other scripts have loaded
  setTimeout(() => {
    initAccessibilitySettings();
    enhanceKeyboardNavigation();
    enhanceAriaAttributes();
    console.log('Accessibility module fully initialized');
  }, 100);
});