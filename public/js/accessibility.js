const themeButtons = document.querySelectorAll('.theme-btn');
const increaseFontBtn = document.getElementById('increase-font');
const decreaseFontBtn = document.getElementById('decrease-font');
const fontSizeValue = document.getElementById('font-size-value');

// Accessibility Tools
const magnifierToggle = document.getElementById('magnifier-toggle');
const lineReaderToggle = document.getElementById('line-reader-toggle');
const magnifier = document.getElementById('magnifier');
const lineReader = document.getElementById('line-reader');

// Font size management
const fontSizes = {
  small: { value: 'small', display: 'Small', size: 14 },
  medium: { value: 'medium', display: 'Medium', size: 16 },
  large: { value: 'large', display: 'Large', size: 18 },
  xlarge: { value: 'xlarge', display: 'Extra Large', size: 20 }
};

let currentFontSizeIndex = 1; // medium

// Magnifier state 
let magnifierState = {
  isDragging: false,
  startX: 0,
  startY: 0,
  currentX: 100,
  currentY: 100
};

// Line reader state
let lineReaderState = {
  // Mask container properties
  isDragging: false,
  isResizing: false,
  resizeType: null,
  startX: 0,
  startY: 0,
  width: 400,
  height: 200,
  left: 100,
  top: 200,
  
  // Window properties
  window: {
    isDragging: false,
    isResizing: false,
    resizeType: null,
    startX: 0,
    startY: 0,
    width: 380, // Will be adjusted to span mask width
    height: 60,
    left: 10,
    top: 50
  }
};

function initAccessibilitySettings() {
  console.log('Initializing accessibility settings...');
  
  const savedPreferences = JSON.parse(localStorage.getItem('userPreferences') || '{}');

  const preferences = {
    theme: savedPreferences.theme || 'black-on-white',
    fontSize: savedPreferences.fontSize || 'medium',
    magnifierEnabled: savedPreferences.magnifierEnabled || false,
    lineReaderEnabled: savedPreferences.lineReaderEnabled || false
  };

  console.log('Loaded preferences:', preferences);

  setTheme(preferences.theme);

  const sizeKeys = Object.keys(fontSizes);
  currentFontSizeIndex = sizeKeys.indexOf(preferences.fontSize);
  if (currentFontSizeIndex === -1) currentFontSizeIndex = 1;
  setFontSize(sizeKeys[currentFontSizeIndex]);

  // Check screen size compatibility for line reader
  updateLineReaderAvailability();

  // Set accessibility tool states - don't enable by default, only if saved preference is true
  if (magnifierToggle) {
    magnifierToggle.checked = preferences.magnifierEnabled;
    if (preferences.magnifierEnabled) {
      toggleMagnifier(true);
    }
  }

  if (lineReaderToggle) {
    // Only enable line reader if screen is compatible AND preference is true
    const shouldEnable = preferences.lineReaderEnabled && isScreenSizeCompatible();
    lineReaderToggle.checked = shouldEnable;
    if (shouldEnable) {
      toggleLineReader(true);
    }
  }

  setupAccessibilityEventListeners();
}

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

  // Accessibility tool toggles
  if (magnifierToggle) {
    magnifierToggle.addEventListener('change', (e) => {
      console.log('Magnifier toggle changed:', e.target.checked);
      toggleMagnifier(e.target.checked);
      saveAccessibilityPreference('magnifierEnabled', e.target.checked);
    });
  }

  if (lineReaderToggle) {
    lineReaderToggle.addEventListener('change', (e) => {
      console.log('Line reader toggle changed:', e.target.checked);
      toggleLineReader(e.target.checked);
      saveAccessibilityPreference('lineReaderEnabled', e.target.checked);
    });
  }

  // Setup magnifier functionality
  setupMagnifier();
  
  // Setup line reader functionality
  setupLineReader();
}

function setTheme(theme) {
  console.log('Setting theme to:', theme);
  
  document.body.classList.remove(
    'theme-black-on-white',
    'theme-black-on-cream', 
    'theme-black-on-light-blue',
    'theme-black-on-light-magenta',
    'theme-white-on-black',
    'theme-yellow-on-blue',
    'theme-gray-on-green'
  );

  document.body.classList.add(`theme-${theme}`);
  
  themeButtons.forEach(button => {
    if (button.getAttribute('data-theme') === theme) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });

  saveAccessibilityPreference('theme', theme);
  
  document.body.style.display = 'none';
  document.body.offsetHeight;
  document.body.style.display = '';
}

function changeFontSize(direction) {
  const sizeKeys = Object.keys(fontSizes);

  let newIndex = currentFontSizeIndex + direction;

  if (newIndex < 0) newIndex = 0;
  if (newIndex >= sizeKeys.length) newIndex = sizeKeys.length - 1;

  if (newIndex !== currentFontSizeIndex) {
    currentFontSizeIndex = newIndex;
    const newSize = sizeKeys[currentFontSizeIndex];
    setFontSize(newSize);
  }
}

function setFontSize(sizeKey) {
  console.log('Setting font size to:', sizeKey);
  
  document.body.classList.remove('font-size-small', 'font-size-medium', 'font-size-large', 'font-size-xlarge');
  document.body.classList.add(`font-size-${sizeKey}`);

  if (fontSizeValue) {
    fontSizeValue.textContent = fontSizes[sizeKey].display;
  }

  document.documentElement.style.fontSize = `${fontSizes[sizeKey].size}px`;

  saveAccessibilityPreference('fontSize', sizeKey);
}

function saveAccessibilityPreference(key, value) {
  const preferences = JSON.parse(localStorage.getItem('userPreferences') || '{}');
  preferences[key] = value;
  localStorage.setItem('userPreferences', JSON.stringify(preferences));
  console.log('Saved accessibility preference:', key, '=', value);
}

// Magnifier functionality
// FIX 5: Start/stop content polling when magnifier is toggled
function toggleMagnifier(enabled) {
  console.log('Toggling magnifier:', enabled);
  if (!magnifier) return;
  
  if (enabled) {
    magnifier.classList.add('active');
    // Position magnifier at saved position
    magnifier.style.left = magnifierState.currentX + 'px';
    magnifier.style.top = magnifierState.currentY + 'px';
    updateMagnifierContent();

    // Start polling for content changes so the magnifier updates
    // immediately when the page changes (question advance, feedback, etc.)
    if (magnifier._pollInterval) clearInterval(magnifier._pollInterval);
    magnifier._lastContentFingerprint = getContentFingerprint();
    magnifier._pollInterval = setInterval(() => {
      if (!magnifier || !magnifier.classList.contains('active')) return;
      const currentFingerprint = getContentFingerprint();
      if (currentFingerprint !== magnifier._lastContentFingerprint) {
        magnifier._lastContentFingerprint = currentFingerprint;
        updateMagnifierContent();
      }
    }, 200);
  } else {
    magnifier.classList.remove('active');

    // Stop polling when magnifier is inactive
    if (magnifier._pollInterval) {
      clearInterval(magnifier._pollInterval);
      magnifier._pollInterval = null;
    }
  }
}

// Lightweight fingerprint of key page elements.
// Checks element counts, text lengths, visibility states, and active page
// so that any meaningful content change is detected without cloning the DOM.
function getContentFingerprint() {
  const questionContainer = document.getElementById('question-container');
  const feedbackContainer = document.getElementById('feedback-container');
  const activePage = document.querySelector('.page.active');
  const progressFill = document.getElementById('progress-fill');

  return [
    activePage ? activePage.id : '',
    questionContainer ? questionContainer.childElementCount + ':' + questionContainer.textContent.length : '',
    feedbackContainer ? feedbackContainer.style.display + ':' + feedbackContainer.textContent.length : '',
    progressFill ? progressFill.style.width : '',
    document.body.className
  ].join('|');
}

// Configuration for accessibility tools screen size requirements
// Line Reader is disabled on smaller screens where it may not be practical
const ACCESSIBILITY_CONFIG = {
  lineReader: {
    minWidth: 768, // Minimum screen width for line reader (pixels) - tablet size and up
    minHeight: 400 // Minimum screen height for line reader (pixels)
  }
};

// Function to update screen size requirements (for future customization)
function updateScreenSizeRequirements(minWidth, minHeight) {
  ACCESSIBILITY_CONFIG.lineReader.minWidth = minWidth;
  ACCESSIBILITY_CONFIG.lineReader.minHeight = minHeight;
  updateLineReaderAvailability();
}

// Helper function to check if screen is large enough for line reader
function isScreenSizeCompatible() {
  return window.innerWidth >= ACCESSIBILITY_CONFIG.lineReader.minWidth && 
         window.innerHeight >= ACCESSIBILITY_CONFIG.lineReader.minHeight;
}

// Helper function to update line reader availability
function updateLineReaderAvailability() {
  if (!lineReaderToggle) return;
  
  const isCompatible = isScreenSizeCompatible();
  const container = lineReaderToggle.closest('.accessibility-tool-option');
  
  if (isCompatible) {
    // Enable line reader option
    lineReaderToggle.disabled = false;
    if (container) {
      container.style.opacity = '1';
      container.style.pointerEvents = 'auto';
    }
    
    // Update description to show it's available
    const description = container?.querySelector('.tool-description');
    if (description) {
      description.textContent = 'Resizable reading guide that highlights one line at a time';
    }
  } else {
    // Disable line reader option and hide if active
    lineReaderToggle.disabled = true;
    lineReaderToggle.checked = false;
    toggleLineReader(false);
    saveAccessibilityPreference('lineReaderEnabled', false);
    
    if (container) {
      container.style.opacity = '0.6';
      container.style.pointerEvents = 'none';
    }
    
    // Update description to show why it's unavailable
    const description = container?.querySelector('.tool-description');
    if (description) {
      description.textContent = `Requires screen size of at least ${ACCESSIBILITY_CONFIG.lineReader.minWidth}\u00D7${ACCESSIBILITY_CONFIG.lineReader.minHeight}px`;
    }
  }
}
function getEventCoordinates(e) {
  if (e.touches && e.touches.length > 0) {
    return {
      clientX: e.touches[0].clientX,
      clientY: e.touches[0].clientY
    };
  }
  return {
    clientX: e.clientX,
    clientY: e.clientY
  };
}

// Helper function to add both mouse and touch event listeners
function addPointerEventListener(element, eventType, handler) {
  if (eventType === 'start') {
    element.addEventListener('mousedown', handler);
    element.addEventListener('touchstart', handler, { passive: false });
  } else if (eventType === 'move') {
    document.addEventListener('mousemove', handler);
    document.addEventListener('touchmove', handler, { passive: false });
  } else if (eventType === 'end') {
    document.addEventListener('mouseup', handler);
    document.addEventListener('touchend', handler);
    document.addEventListener('touchcancel', handler);
  }
}

function setupMagnifier() {
  if (!magnifier) return;
  
  let animationId;
  let lastUpdate = 0;
  const updateThreshold = 16; // ~60fps

  const handleStart = (e) => {
    // Only prevent default if we're actually on the magnifier
    if (e.target === magnifier || magnifier.contains(e.target)) {
      e.preventDefault(); // Only prevent when touching the magnifier
      const coords = getEventCoordinates(e);
      magnifierState.isDragging = true;
      magnifierState.startX = coords.clientX - magnifierState.currentX;
      magnifierState.startY = coords.clientY - magnifierState.currentY;
      magnifier.style.cursor = 'grabbing';
      e.stopPropagation();
    }
  };

  const handleMove = (e) => {
    if (!magnifierState.isDragging) return;
    
    // Only prevent default when actively dragging
    e.preventDefault();
    const coords = getEventCoordinates(e);
    const now = Date.now();
    
    magnifierState.currentX = coords.clientX - magnifierState.startX;
    magnifierState.currentY = coords.clientY - magnifierState.startY;
    
    // Keep magnifier within viewport
    const maxX = window.innerWidth - magnifier.offsetWidth;
    const maxY = window.innerHeight - magnifier.offsetHeight;
    
    magnifierState.currentX = Math.max(0, Math.min(maxX, magnifierState.currentX));
    magnifierState.currentY = Math.max(0, Math.min(maxY, magnifierState.currentY));
    
    magnifier.style.left = magnifierState.currentX + 'px';
    magnifier.style.top = magnifierState.currentY + 'px';
    
    // Throttle updates for better performance
    if (now - lastUpdate > updateThreshold) {
      updateMagnifierContent();
      lastUpdate = now;
    }
  };

  const handleEnd = () => {
    if (magnifierState.isDragging) {
      magnifierState.isDragging = false;
      magnifier.style.cursor = 'move';
      // Final update when dragging stops
      updateMagnifierContent();
    }
  };

  // Add event listeners
  magnifier.addEventListener('mousedown', handleStart);
  magnifier.addEventListener('touchstart', handleStart, { passive: false });
  
  document.addEventListener('mousemove', handleMove);
  document.addEventListener('touchmove', handleMove, { passive: false });
  
  document.addEventListener('mouseup', handleEnd);
  document.addEventListener('touchend', handleEnd);
  document.addEventListener('touchcancel', handleEnd);

  magnifier._lastContentFingerprint = '';
  magnifier._pollInterval = null;
}

function updateMagnifierContent() {
  if (!magnifier || !magnifier.classList.contains('active')) return;

  const magnifierContent = document.getElementById('magnifier-content');
  if (!magnifierContent) return;
  
  const rect = magnifier.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  // Clear previous content
  magnifierContent.innerHTML = '';

  // Clone the entire document body
  const bodyClone = document.body.cloneNode(true);
  
  // Remove the magnifier itself from the clone to avoid recursion
  const magnifierClone = bodyClone.querySelector('#magnifier');
  if (magnifierClone) {
    magnifierClone.remove();
  }
  
  // Remove the line reader from the clone to avoid interference
  const lineReaderClone = bodyClone.querySelector('#line-reader');
  if (lineReaderClone) {
    lineReaderClone.remove();
  }

  // Apply styles to make the clone work as magnified content
  bodyClone.style.position = 'absolute';
  bodyClone.style.top = '0';
  bodyClone.style.left = '0';
  // FIX 2: Use full document dimensions so scrolled-down content exists in the clone
  bodyClone.style.width = document.documentElement.scrollWidth + 'px';
  bodyClone.style.height = document.documentElement.scrollHeight + 'px';
  bodyClone.style.transform = 'scale(2)';
  bodyClone.style.transformOrigin = '0 0';
  bodyClone.style.pointerEvents = 'none';
  bodyClone.style.overflow = 'hidden';
  
  // FIX 1: Account for page scroll so content displays correctly when scrolled
  const scrollX = window.scrollX || window.pageXOffset;
  const scrollY = window.scrollY || window.pageYOffset;
  const offsetX = -((centerX + scrollX) * 2 - 100); // 100 is half the magnifier width
  const offsetY = -((centerY + scrollY) * 2 - 100); // 100 is half the magnifier height
  
  bodyClone.style.marginLeft = offsetX + 'px';
  bodyClone.style.marginTop = offsetY + 'px';

  // Copy computed styles for better rendering
  const originalElements = document.body.querySelectorAll('*');
  const clonedElements = bodyClone.querySelectorAll('*');
  
  // Copy essential computed styles for proper rendering
  for (let i = 0; i < Math.min(originalElements.length, clonedElements.length); i++) {
    const original = originalElements[i];
    const cloned = clonedElements[i];
    
    if (original && cloned) {
      const computedStyle = window.getComputedStyle(original);
      
      // Copy key visual properties
      cloned.style.backgroundColor = computedStyle.backgroundColor;
      cloned.style.color = computedStyle.color;
      cloned.style.fontSize = computedStyle.fontSize;
      cloned.style.fontFamily = computedStyle.fontFamily;
      cloned.style.fontWeight = computedStyle.fontWeight;
      cloned.style.border = computedStyle.border;
      cloned.style.borderRadius = computedStyle.borderRadius;
      cloned.style.padding = computedStyle.padding;
      cloned.style.margin = computedStyle.margin;
      cloned.style.display = computedStyle.display;
      cloned.style.position = computedStyle.position;
      
      // Handle images specifically
      if (original.tagName === 'IMG' && original.src) {
        cloned.src = original.src;
        cloned.style.width = computedStyle.width;
        cloned.style.height = computedStyle.height;
      }
    }
  }

  // Append the cloned content to the magnifier
  magnifierContent.appendChild(bodyClone);
}

// Line Reader functionality
function toggleLineReader(enabled) {
  console.log('Toggling line reader:', enabled);
  if (!lineReader) return;
  
  if (enabled) {
    lineReader.classList.add('active');
    // Set window width to span the mask
    lineReaderState.window.width = lineReaderState.width - 20;
    lineReaderState.window.left = 10;
    createMaskSegments(); // Make sure mask segments are created
    updateLineReaderPosition();
  } else {
    lineReader.classList.remove('active');
  }
}

function setupLineReader() {
  if (!lineReader) return;
  
  const handle = document.getElementById('line-reader-handle');
  const windowElement = document.getElementById('line-reader-window');
  const windowHandle = document.getElementById('line-reader-window-handle');

  // Create resize handles dynamically since they're not in the HTML
  createResizeHandles();
  
  // Create mask segments
  createMaskSegments();

  console.log('Setting up line reader');

  // Helper function for mask dragging
  const handleMaskStart = (e) => {
    // Only prevent default when touching interactive elements
    if (e.target === lineReader || e.target.classList.contains('line-reader-mask-top') || 
        e.target.classList.contains('line-reader-mask-bottom') || 
        e.target.classList.contains('line-reader-mask-left') || 
        e.target.classList.contains('line-reader-mask-right')) {
      e.preventDefault();
      const coords = getEventCoordinates(e);
      console.log('Mask body drag started');
      lineReaderState.isDragging = true;
      lineReaderState.startX = coords.clientX - lineReaderState.left;
      lineReaderState.startY = coords.clientY - lineReaderState.top;
      lineReader.style.cursor = 'grabbing';
      e.stopPropagation();
    }
  };

  // Make the entire line reader container draggable
  lineReader.addEventListener('mousedown', handleMaskStart);
  lineReader.addEventListener('touchstart', handleMaskStart, { passive: false });

  // Handle dragging the mask container via handle (alternative)
  if (handle) {
    const handleStart = (e) => {
      e.preventDefault();
      const coords = getEventCoordinates(e);
      console.log('Mask handle drag started');
      lineReaderState.isDragging = true;
      lineReaderState.startX = coords.clientX - lineReaderState.left;
      lineReaderState.startY = coords.clientY - lineReaderState.top;
      handle.style.cursor = 'grabbing';
      e.stopPropagation();
    };

    handle.addEventListener('mousedown', handleStart);
    handle.addEventListener('touchstart', handleStart, { passive: false });
  }

  // Handle dragging the window inside the mask - ONLY VERTICAL
  if (windowElement) {
    const windowStart = (e) => {
      // Only drag if clicking on the window itself, not its children
      if (e.target === windowElement) {
        e.preventDefault();
        const coords = getEventCoordinates(e);
        console.log('Window drag started');
        lineReaderState.window.isDragging = true;
        lineReaderState.window.startY = coords.clientY - lineReaderState.window.top;
        windowElement.style.cursor = 'ns-resize';
        e.stopPropagation();
      }
    };

    windowElement.addEventListener('mousedown', windowStart);
    windowElement.addEventListener('touchstart', windowStart, { passive: false });
  }

  if (windowHandle) {
    const windowHandleStart = (e) => {
      e.preventDefault();
      const coords = getEventCoordinates(e);
      console.log('Window handle drag started');
      lineReaderState.window.isDragging = true;
      lineReaderState.window.startY = coords.clientY - lineReaderState.window.top;
      windowHandle.style.cursor = 'ns-resize';
      e.stopPropagation();
    };

    windowHandle.addEventListener('mousedown', windowHandleStart);
    windowHandle.addEventListener('touchstart', windowHandleStart, { passive: false });
  }

  // Global move handlers
  const handleMove = (e) => {
    // Only prevent default when actively dragging or resizing
    if (lineReaderState.isDragging || lineReaderState.isResizing || 
        lineReaderState.window.isDragging || lineReaderState.window.isResizing) {
      e.preventDefault();
    }
    
    const coords = getEventCoordinates(e);

    // Handle mask dragging
    if (lineReaderState.isDragging) {
      lineReaderState.left = coords.clientX - lineReaderState.startX;
      lineReaderState.top = coords.clientY - lineReaderState.startY;
      
      // Keep within viewport
      const maxLeft = window.innerWidth - lineReaderState.width;
      const maxTop = window.innerHeight - lineReaderState.height;
      lineReaderState.left = Math.max(0, Math.min(maxLeft, lineReaderState.left));
      lineReaderState.top = Math.max(0, Math.min(maxTop, lineReaderState.top));
      
      updateLineReaderPosition();
    }
    
    // Handle mask resizing
    else if (lineReaderState.isResizing) {
      handleMaskResize(e);
    }
    
    // Handle window dragging - ONLY VERTICAL MOVEMENT
    else if (lineReaderState.window.isDragging) {
      const newTop = coords.clientY - lineReaderState.window.startY;
      
      // Keep window within mask bounds vertically
      const maxWindowTop = lineReaderState.height - lineReaderState.window.height - 10;
      
      lineReaderState.window.top = Math.max(10, Math.min(maxWindowTop, newTop));
      // Window left and width stay fixed to fit within mask
      
      updateLineReaderPosition();
    }
    
    // Handle window resizing
    else if (lineReaderState.window.isResizing) {
      handleWindowResize(e);
    }
  };

  const handleEnd = () => {
    if (lineReaderState.isDragging) {
      lineReaderState.isDragging = false;
      if (handle) handle.style.cursor = 'move';
      lineReader.style.cursor = 'move';
      console.log('Mask drag ended');
    }
    if (lineReaderState.isResizing) {
      lineReaderState.isResizing = false;
      lineReaderState.resizeType = null;
      console.log('Mask resize ended');
    }
    if (lineReaderState.window.isDragging) {
      lineReaderState.window.isDragging = false;
      if (windowHandle) windowHandle.style.cursor = 'ns-resize';
      if (windowElement) windowElement.style.cursor = 'ns-resize';
      console.log('Window drag ended');
    }
    if (lineReaderState.window.isResizing) {
      lineReaderState.window.isResizing = false;
      lineReaderState.window.resizeType = null;
      console.log('Window resize ended');
    }
  };

  // Add global event listeners
  document.addEventListener('mousemove', handleMove);
  document.addEventListener('touchmove', handleMove, { passive: false });
  document.addEventListener('mouseup', handleEnd);
  document.addEventListener('touchend', handleEnd);
  document.addEventListener('touchcancel', handleEnd);
}

function createMaskSegments() {
  if (!lineReader) return;
  
  // Remove existing mask segments
  const existingSegments = lineReader.querySelectorAll('.line-reader-mask-top, .line-reader-mask-bottom, .line-reader-mask-left, .line-reader-mask-right');
  existingSegments.forEach(segment => segment.remove());
  
  // Create new mask segments
  const maskTop = document.createElement('div');
  maskTop.className = 'line-reader-mask-top';
  
  const maskBottom = document.createElement('div');
  maskBottom.className = 'line-reader-mask-bottom';
  
  const maskLeft = document.createElement('div');
  maskLeft.className = 'line-reader-mask-left';
  
  const maskRight = document.createElement('div');
  maskRight.className = 'line-reader-mask-right';
  
  // Insert mask segments before other elements
  lineReader.insertBefore(maskTop, lineReader.firstChild);
  lineReader.insertBefore(maskBottom, lineReader.firstChild);
  lineReader.insertBefore(maskLeft, lineReader.firstChild);
  lineReader.insertBefore(maskRight, lineReader.firstChild);
}

function createResizeHandles() {
  if (!lineReader) return;
  
  // Create mask resize handles - ONLY CORNERS
  const cornerDirections = ['ne', 'nw', 'se', 'sw'];
  cornerDirections.forEach(direction => {
    const handle = document.createElement('div');
    handle.className = `line-reader-resize line-reader-resize-${direction}`;
    handle.dataset.resize = direction;
    
    const handleStart = (e) => {
      e.preventDefault(); // Only prevent when touching resize handles
      const coords = getEventCoordinates(e);
      console.log('Mask resize started:', direction);
      lineReaderState.isResizing = true;
      lineReaderState.resizeType = direction;
      lineReaderState.startX = coords.clientX;
      lineReaderState.startY = coords.clientY;
      e.stopPropagation();
    };

    handle.addEventListener('mousedown', handleStart);
    handle.addEventListener('touchstart', handleStart, { passive: false });
    lineReader.appendChild(handle);
  });

  // Create window resize handles - ONLY VERTICAL (top and bottom)
  const windowElement = document.getElementById('line-reader-window');
  if (windowElement) {
    const verticalDirections = ['n', 's'];
    verticalDirections.forEach(direction => {
      const handle = document.createElement('div');
      handle.className = `line-reader-window-resize line-reader-window-resize-${direction}`;
      handle.dataset.windowResize = direction;
      
      const handleStart = (e) => {
        e.preventDefault(); // Only prevent when touching resize handles
        const coords = getEventCoordinates(e);
        console.log('Window resize started:', direction);
        lineReaderState.window.isResizing = true;
        lineReaderState.window.resizeType = direction;
        lineReaderState.window.startX = coords.clientX;
        lineReaderState.window.startY = coords.clientY;
        e.stopPropagation();
      };

      handle.addEventListener('mousedown', handleStart);
      handle.addEventListener('touchstart', handleStart, { passive: false });
      windowElement.appendChild(handle);
    });
  }
}

function handleMaskResize(e) {
  const coords = getEventCoordinates(e);
  const deltaX = coords.clientX - lineReaderState.startX;
  const deltaY = coords.clientY - lineReaderState.startY;
  
  const minWidth = 200;
  const minHeight = 100;
  
  // Only handle corner resizing
  switch (lineReaderState.resizeType) {
    case 'ne':
      const newTopNE = lineReaderState.top + deltaY;
      const newHeightNE = lineReaderState.height - deltaY;
      const newWidthNE = lineReaderState.width + deltaX;
      const maxRightNE = window.innerWidth - lineReaderState.left;
      
      if (newHeightNE >= minHeight && newTopNE >= 0 && newWidthNE >= minWidth && newWidthNE <= maxRightNE) {
        lineReaderState.top = newTopNE;
        lineReaderState.height = newHeightNE;
        lineReaderState.width = newWidthNE;
        lineReaderState.startX = coords.clientX;
        lineReaderState.startY = coords.clientY;
        adjustWindowToBounds();
      }
      break;
    case 'nw':
      const newTopNW = lineReaderState.top + deltaY;
      const newHeightNW = lineReaderState.height - deltaY;
      const newLeftNW = lineReaderState.left + deltaX;
      const newWidthNW = lineReaderState.width - deltaX;
      
      if (newHeightNW >= minHeight && newTopNW >= 0 && newWidthNW >= minWidth && newLeftNW >= 0) {
        lineReaderState.top = newTopNW;
        lineReaderState.height = newHeightNW;
        lineReaderState.left = newLeftNW;
        lineReaderState.width = newWidthNW;
        lineReaderState.startX = coords.clientX;
        lineReaderState.startY = coords.clientY;
        adjustWindowToBounds();
      }
      break;
    case 'se':
      const newHeightSE = lineReaderState.height + deltaY;
      const newWidthSE = lineReaderState.width + deltaX;
      const maxBottomSE = window.innerHeight - lineReaderState.top;
      const maxRightSE = window.innerWidth - lineReaderState.left;
      
      if (newHeightSE >= minHeight && newHeightSE <= maxBottomSE && newWidthSE >= minWidth && newWidthSE <= maxRightSE) {
        lineReaderState.height = newHeightSE;
        lineReaderState.width = newWidthSE;
        lineReaderState.startX = coords.clientX;
        lineReaderState.startY = coords.clientY;
        adjustWindowToBounds();
      }
      break;
    case 'sw':
      const newHeightSW = lineReaderState.height + deltaY;
      const newLeftSW = lineReaderState.left + deltaX;
      const newWidthSW = lineReaderState.width - deltaX;
      const maxBottomSW = window.innerHeight - lineReaderState.top;
      
      if (newHeightSW >= minHeight && newHeightSW <= maxBottomSW && newWidthSW >= minWidth && newLeftSW >= 0) {
        lineReaderState.height = newHeightSW;
        lineReaderState.left = newLeftSW;
        lineReaderState.width = newWidthSW;
        lineReaderState.startX = coords.clientX;
        lineReaderState.startY = coords.clientY;
        adjustWindowToBounds();
      }
      break;
  }
  
  updateLineReaderPosition();
}

function handleWindowResize(e) {
  const coords = getEventCoordinates(e);
  const deltaY = coords.clientY - lineReaderState.window.startY;
  
  const minWindowHeight = 20;
  
  // Only handle vertical resizing
  switch (lineReaderState.window.resizeType) {
    case 'n':
      const newWindowTopN = lineReaderState.window.top + deltaY;
      const newWindowHeightN = lineReaderState.window.height - deltaY;
      if (newWindowHeightN >= minWindowHeight && newWindowTopN >= 10) {
        lineReaderState.window.top = newWindowTopN;
        lineReaderState.window.height = newWindowHeightN;
        lineReaderState.window.startY = coords.clientY;
      }
      break;
    case 's':
      const newWindowHeightS = lineReaderState.window.height + deltaY;
      const maxWindowBottom = lineReaderState.height - lineReaderState.window.top - 10;
      if (newWindowHeightS >= minWindowHeight && newWindowHeightS <= maxWindowBottom) {
        lineReaderState.window.height = newWindowHeightS;
        lineReaderState.window.startY = coords.clientY;
      }
      break;
  }
  
  updateLineReaderPosition();
}

function adjustWindowToBounds() {
  // Window width should always span most of the mask width with small margins
  lineReaderState.window.left = 10;
  lineReaderState.window.width = lineReaderState.width - 20; // 10px margin on each side
  
  // Keep window within mask bounds vertically
  const maxWindowTop = lineReaderState.height - lineReaderState.window.height - 10;
  lineReaderState.window.top = Math.max(10, Math.min(maxWindowTop, lineReaderState.window.top));
  
  // Adjust window height if it's too big for the mask
  const maxWindowHeight = lineReaderState.height - lineReaderState.window.top - 10;
  lineReaderState.window.height = Math.min(lineReaderState.window.height, maxWindowHeight);
  
  // Update positions after adjusting bounds
  updateLineReaderPosition();
}

function updateLineReaderPosition() {
  if (!lineReader) return;
  
  const windowElement = document.getElementById('line-reader-window');
  const maskTop = lineReader.querySelector('.line-reader-mask-top');
  const maskBottom = lineReader.querySelector('.line-reader-mask-bottom');
  const maskLeft = lineReader.querySelector('.line-reader-mask-left');
  const maskRight = lineReader.querySelector('.line-reader-mask-right');
  
  // Update mask position and size
  lineReader.style.left = lineReaderState.left + 'px';
  lineReader.style.top = lineReaderState.top + 'px';
  lineReader.style.width = lineReaderState.width + 'px';
  lineReader.style.height = lineReaderState.height + 'px';
  
  // Update window position and size
  if (windowElement) {
    windowElement.style.left = lineReaderState.window.left + 'px';
    windowElement.style.top = lineReaderState.window.top + 'px';
    windowElement.style.width = lineReaderState.window.width + 'px';
    windowElement.style.height = lineReaderState.window.height + 'px';
  }
  
  // Update mask segments to create the "hole" around the window
  if (maskTop) {
    maskTop.style.top = '0px';
    maskTop.style.left = '0px';
    maskTop.style.width = lineReaderState.width + 'px';
    maskTop.style.height = lineReaderState.window.top + 'px';
  }
  
  if (maskBottom) {
    const bottomTop = lineReaderState.window.top + lineReaderState.window.height;
    maskBottom.style.top = bottomTop + 'px';
    maskBottom.style.left = '0px';
    maskBottom.style.width = lineReaderState.width + 'px';
    maskBottom.style.height = (lineReaderState.height - bottomTop) + 'px';
  }
  
  if (maskLeft) {
    maskLeft.style.top = lineReaderState.window.top + 'px';
    maskLeft.style.left = '0px';
    maskLeft.style.width = lineReaderState.window.left + 'px';
    maskLeft.style.height = lineReaderState.window.height + 'px';
  }
  
  if (maskRight) {
    const rightLeft = lineReaderState.window.left + lineReaderState.window.width;
    maskRight.style.top = lineReaderState.window.top + 'px';
    maskRight.style.left = rightLeft + 'px';
    maskRight.style.width = (lineReaderState.width - rightLeft) + 'px';
    maskRight.style.height = lineReaderState.window.height + 'px';
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('Accessibility module initializing...');
  
  setTimeout(() => {
    initAccessibilitySettings();
    console.log('Accessibility module fully initialized');
  }, 100);
});

// Handle window resizing
window.addEventListener('resize', () => {
  // Keep tools within viewport bounds when window resizes
  if (magnifier && magnifier.classList.contains('active')) {
    const maxX = window.innerWidth - magnifier.offsetWidth;
    const maxY = window.innerHeight - magnifier.offsetHeight;
    magnifierState.currentX = Math.max(0, Math.min(maxX, magnifierState.currentX));
    magnifierState.currentY = Math.max(0, Math.min(maxY, magnifierState.currentY));
    magnifier.style.left = magnifierState.currentX + 'px';
    magnifier.style.top = magnifierState.currentY + 'px';
    updateMagnifierContent();
  }
  
  if (lineReader && lineReader.classList.contains('active')) {
    const maxLeft = window.innerWidth - lineReaderState.width;
    const maxTop = window.innerHeight - lineReaderState.height;
    lineReaderState.left = Math.max(0, Math.min(maxLeft, lineReaderState.left));
    lineReaderState.top = Math.max(0, Math.min(maxTop, lineReaderState.top));
    updateLineReaderPosition();
  }
});

window.addEventListener('scroll', () => {
  if (magnifier && magnifier.classList.contains('active')) {
    updateMagnifierContent();
  }
}, { passive: true });