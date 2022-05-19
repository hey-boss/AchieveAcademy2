// Import Alpine.js
import Alpine from 'alpinejs';

// Polyfill for browsers which don't support :focus-visible
import 'focus-visible';

// Import aos
import AOS from 'aos';

// Initialize Alpine
window.Alpine = Alpine;
Alpine.start();

// Initialize AOS
AOS.init({
  once: true,
  disable: 'phone',
  duration: 500,
  easing: 'ease-out-cubic',
});

// import component from './components/component';
