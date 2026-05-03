// Disable Right Click
   window.addEventListener('contextmenu', function(event) {
     event.preventDefault();
   });

// Confirm leaving site when external link is clicked
function confirmExit() {
  if (confirm("You are about to leave SOLace and go to a third-party website. Third-party websites may not be suitable for children under 13. Do you wish to continue?")) {
    return true;
  } else {
    return false;
  }
}

// DOM Elements
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');
const backToTopBtn = document.getElementById('back-to-top');
const categoryCards = document.querySelectorAll('.category-card');
const navLinksArray = document.querySelectorAll('.nav-link');

// Initialize the home page
function initHomePage() {
  setupMobileMenu();
  setupSmoothScrolling();
  setupBackToTop();
  setupCategoryCards();
  setupScrollAnimation();
  
  console.log('SOLace Home Page Initialized');
}

// Mobile Menu Toggle
function setupMobileMenu() {
  if (mobileMenuToggle && navLinks) {
    // Create overlay element
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);

    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileMenuToggle.classList.toggle('active');
      overlay.classList.toggle('active');
    });

    // Close mobile menu when clicking on overlay
    overlay.addEventListener('click', () => {
      navLinks.classList.remove('active');
      mobileMenuToggle.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    });

    // Close mobile menu when clicking outside (keep existing functionality)
    document.addEventListener('click', (e) => {
      if (!mobileMenuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });

    // Close mobile menu when clicking on a link
    navLinksArray.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
      });
    });

    // Handle keyboard navigation
    mobileMenuToggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        mobileMenuToggle.click();
      }
    });

    // Handle escape key to close menu
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
        mobileMenuToggle.focus();
      }
    });
  }
}

// Smooth Scrolling for anchor links
function setupSmoothScrolling() {
  // Handle navigation links
  navLinksArray.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // Only handle anchor links (starting with #)
      if (href && href.startsWith('#')) {
        e.preventDefault();
        scrollToSection(href);
      }
    });
  });
}

// Scroll to section function
function scrollToSection(selector) {
  const element = document.querySelector(selector);
  if (element) {
    const headerHeight = 80; // Account for fixed header
    const elementPosition = element.offsetTop - headerHeight;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
}

// Make scrollToSection available globally for onclick handlers
window.scrollToSection = scrollToSection;

// Back to top button functionality
function setupBackToTop() {
  if (backToTopBtn) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTopBtn.style.display = 'block';
        backToTopBtn.style.opacity = '1';
      } else {
        backToTopBtn.style.opacity = '0';
        setTimeout(() => {
          if (window.pageYOffset <= 300) {
            backToTopBtn.style.display = 'none';
          }
        }, 300);
      }
    });

    // Scroll to top when clicked
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// Category card interactions
function setupCategoryCards() {
  categoryCards.forEach(card => {
    const category = card.getAttribute('data-category');
    
    // Add hover effects
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
    
    // Card click handler (excluding the button)
    card.addEventListener('click', (e) => {
      const button = card.querySelector('.category-btn');
    });
  });
}

// Scroll-based animations
function setupScrollAnimation() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll('.feature-card, .category-card, .stat-card, .testimonial-slide');
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Animate a single .stat-number element from 0 up to its stored target.
// Uses 100 steps at 20ms (~2s total) so increments align cleanly with the
// kilo-formatted display (e.g., 100K target advances 1K per frame).
function animateCounter(el) {
  // Cancel any in-flight animation on this element so re-entries restart cleanly.
  if (el._counterTimer) {
    clearInterval(el._counterTimer);
    el._counterTimer = null;
  }

  const target = parseInt(el.dataset.target, 10) || 0;
  const increment = target / 100;
  let current = 0;

  el._counterTimer = setInterval(() => {
    current += increment;
    if (current >= target) {
      el.textContent = formatNumber(target);
      clearInterval(el._counterTimer);
      el._counterTimer = null;
    } else {
      el.textContent = formatNumber(Math.floor(current));
    }
  }, 20);
}

// Format numbers for display in condensed form (e.g., 100000 -> 100K+, 1500 -> 1.5K+).
function formatNumber(num) {
  if (num >= 1000) {
    const result = num / 1000;
    const formatted = result % 1 === 0 ? result.toFixed(0) : result.toFixed(1);
    return formatted + 'K+';
  }
  return num + '+';
}

// Intersection Observer for counter animation.
// Observes each .stat-number element individually so hero stats and the stats grid
// both get covered, captures targets from the original HTML once, and animates each
// counter exactly once per page load (unobserved after first intersection).
function setupCounterAnimation() {
  const counters = document.querySelectorAll('.stat-number');
  if (counters.length === 0) return;

  // Capture target values from the initial HTML and seed displayed value at 0.
  counters.forEach(counter => {
    const original = counter.textContent.trim();
    const target = parseInt(original.replace(/[^0-9]/g, ''), 10) || 0;
    counter.dataset.target = target;
    counter.textContent = formatNumber(0);
  });

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

// Handle URL parameters for category selection
function handleURLParameters() {
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('category');
  
  if (category) {
    // If there's a category parameter, redirect to the test platform
    window.location.href = `index.html?category=${category}`;
  }
}

// Header scroll effect
function setupHeaderScrollEffect() {
  const header = document.querySelector('header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.style.background = 'linear-gradient(135deg, rgba(74, 111, 165, 0.95) 0%, rgba(58, 90, 128, 0.95) 100%)';
      header.style.backdropFilter = 'blur(10px)';
    } else {
      header.style.background = 'linear-gradient(135deg, #4a6fa5 0%, #3a5a80 100%)';
      header.style.backdropFilter = 'none';
    }
  });
}

// Form validation (if contact forms are added later)
function setupFormValidation() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Basic form validation logic can be added here
      console.log('Form submitted');
    });
  });
}

// Accessibility enhancements
function setupAccessibility() {
  // Keyboard navigation for cards
  categoryCards.forEach(card => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Navigate to ${card.querySelector('.category-title').textContent} tests`);
    
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const category = card.getAttribute('data-category');
        window.location.href = `index.html?category=${category}`;
      }
    });
  });
  
  // Focus management for mobile menu
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        mobileMenuToggle.click();
      }
    });
  }
  
  // Skip to main content link
  const skipLink = document.createElement('a');
  skipLink.href = '#main';
  skipLink.textContent = 'Skip to main content';
  skipLink.className = 'skip-link';
  skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 6px;
    background: #4a6fa5;
    color: white;
    padding: 8px;
    text-decoration: none;
    border-radius: 4px;
    z-index: 1001;
  `;
  
  skipLink.addEventListener('focus', () => {
    skipLink.style.top = '6px';
  });
  
  skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
  });
  
  document.body.insertBefore(skipLink, document.body.firstChild);
  
  // Add main id to main element
  const main = document.querySelector('main');
  if (main) {
    main.id = 'main';
  }
}

// Error handling
function setupErrorHandling() {
  window.addEventListener('error', (e) => {
    console.error('JavaScript error on home page:', e.error);
  });
  
  // Handle navigation errors
  window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
  });
}

// Performance monitoring
function setupPerformanceMonitoring() {
  // Monitor page load performance
  window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`Home page loaded in ${loadTime.toFixed(2)}ms`);
    
    // Log navigation timing if available
    if (performance.navigation) {
      console.log('Navigation type:', performance.navigation.type);
    }
  });
}

// =============================================
// Testimonials Carousel
// =============================================

const testimonials = [
  {
    text: "SOLace made studying for my math SOL so much easier. I felt really prepared on test day.",
    author: "Grade 7 Student, Fairfax County"
  },
  {
    text: "As a parent, I love that my kids can practice without needing an account or worrying about their data being collected.",
    author: "Parent of Two, Loudoun County"
  },
  {
    text: "I love this website. I use it with tutoring students both in reading and math. I like that it is released SOLs from years past and that it is in a more test like environment. When we print them it isn’t the same for kids who may struggle with testing anxiety. Therefore having it in this format is so helpful. Very impressed this is made by a current FCPS student as well.",
    author: "Molly Sullivan, teacher in Fairfax County"
  },
  {
    text: "The reading tests helped me build confidence before the real thing. I actually look forward to practice now!",
    author: "Grade 4 Student, Richmond"
  },
  {
    text: "Finally a free resource that focuses on Virginia standards specifically. This fills a real gap for our school.",
    author: "Curriculum Specialist, Arlington"
  }
];

function setupTestimonialsCarousel() {
  var slide = document.querySelector('.testimonial-slide');
  var textEl = document.querySelector('.testimonial-text');
  var authorEl = document.querySelector('.testimonial-author');
  var prevBtn = document.querySelector('.testimonial-prev');
  var nextBtn = document.querySelector('.testimonial-next');
  var dotsContainer = document.querySelector('.testimonial-dots');

  if (!slide || !textEl || !authorEl || !prevBtn || !nextBtn || !dotsContainer) return;

  var current = 0;
  var autoInterval = null;
  var userHasNavigated = false;
  var isTransitioning = false;
  var ADVANCE_MS = 8000;
  var FADE_MS = 500;

  // Build dot indicators
  for (var i = 0; i < testimonials.length; i++) {
    var dot = document.createElement('button');
    dot.className = 'testimonial-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Go to testimonial ' + (i + 1));
    dot.setAttribute('data-index', i);
    dot.addEventListener('click', function() {
      var idx = parseInt(this.getAttribute('data-index'));
      userHasNavigated = true;
      stopAuto();
      goTo(idx);
    });
    dotsContainer.appendChild(dot);
  }

  var dots = dotsContainer.querySelectorAll('.testimonial-dot');

  function render(index) {
    textEl.textContent = testimonials[index].text;
    authorEl.textContent = '— ' + testimonials[index].author;
    for (var d = 0; d < dots.length; d++) {
      if (d === index) {
        dots[d].classList.add('active');
      } else {
        dots[d].classList.remove('active');
      }
    }
  }

  function goTo(index) {
    if (index === current || isTransitioning) return;
    isTransitioning = true;
    slide.classList.add('fade-out');

    setTimeout(function() {
      current = index;
      render(current);
      slide.classList.remove('fade-out');
      isTransitioning = false;
    }, FADE_MS);
  }

  function next() {
    goTo((current + 1) % testimonials.length);
  }

  function prev() {
    goTo((current - 1 + testimonials.length) % testimonials.length);
  }

  function startAuto() {
    if (userHasNavigated) return;
    autoInterval = setInterval(next, ADVANCE_MS);
  }

  function stopAuto() {
    clearInterval(autoInterval);
    autoInterval = null;
  }

  prevBtn.addEventListener('click', function() {
    userHasNavigated = true;
    stopAuto();
    prev();
  });

  nextBtn.addEventListener('click', function() {
    userHasNavigated = true;
    stopAuto();
    next();
  });

  // Keyboard support for arrows
  prevBtn.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); prevBtn.click(); }
  });
  nextBtn.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); nextBtn.click(); }
  });

  // Initial render and start auto-advance
  render(current);
  startAuto();
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initHomePage();
  setupCounterAnimation();
  setupHeaderScrollEffect();
  setupFormValidation();
  setupAccessibility();
  setupErrorHandling();
  setupPerformanceMonitoring();
  setupTestimonialsCarousel();
  handleURLParameters();
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    console.log('Home page hidden');
  } else {
    console.log('Home page visible');
  }
});

// Export functions for potential use by other scripts
window.SOLaceHome = {
  scrollToSection,
  initHomePage,
  animateCounter
};