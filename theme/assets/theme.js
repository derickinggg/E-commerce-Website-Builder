/**
 * JERSEY SOCIETY Theme JS
 * Modern interactions and cart functionality
 */

(function() {
  'use strict';

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Search input enhancement
  const searchInput = document.querySelector('input[name="q"]');
  if (searchInput) {
    searchInput.addEventListener('focus', function() {
      this.parentElement.style.transform = 'scale(1.02)';
    });
    searchInput.addEventListener('blur', function() {
      this.parentElement.style.transform = 'scale(1)';
    });
  }

  // Add to cart functionality (can be expanded)
  document.addEventListener('DOMContentLoaded', function() {
    console.log('🏀 JERSEY SOCIETY Theme Loaded');
    
    // Header scroll effect
    let lastScroll = 0;
    const header = document.querySelector('.header-sticky');
    
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll <= 0) {
        header.style.boxShadow = 'none';
      } else {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,.3)';
      }
      
      lastScroll = currentScroll;
    });
  });

  // Cart update notification (basic)
  function notifyCartUpdate(itemCount) {
    const cartBtn = document.querySelector('a[href*="cart"]');
    if (cartBtn) {
      cartBtn.style.transform = 'scale(1.1)';
      setTimeout(() => {
        cartBtn.style.transform = 'scale(1)';
      }, 200);
    }
  }

  // Expose for Shopify integration
  window.JERSEY_SOCIETY = {
    notifyCartUpdate
  };

})();
