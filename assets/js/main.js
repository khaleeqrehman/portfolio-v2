/**
* Optimized main.js - Final Version
* Compatible with your current HTML/CSS
*/
document.addEventListener('DOMContentLoaded', function() {
  // 1. Preloader
  const preloader = document.querySelector('#preloader');
  if (preloader) window.addEventListener('load', () => preloader.remove());

  // 2. Scroll Top Button
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const toggleScrollTop = () => {
      window.scrollY > 100 ? 
        scrollTop.classList.add('active') : 
        scrollTop.classList.remove('active');
    };
    window.addEventListener('load', toggleScrollTop);
    window.addEventListener('scroll', toggleScrollTop);
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 3. Initialize AOS
  if (window.AOS) {
    AOS.init({ 
      duration: 600, 
      easing: 'ease-in-out', 
      once: true 
    });
  }

  // 4. Typed.js (Hero Text)
  const typedElement = document.querySelector('.typed');
  if (typedElement && window.Typed) {
    new Typed('.typed', {
      strings: typedElement.dataset.typedItems.split(','),
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  // 5. PureCounter
  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });
  // 7. GLightbox
  if (window.GLightbox) {
    GLightbox({ selector: '.glightbox' });
  }

  // 8. Isotope Portfolio Filter
  if (window.Isotope && window.imagesLoaded) {
    document.querySelectorAll('.isotope-layout').forEach(iso => {
      imagesLoaded(iso.querySelector('.isotope-container'), () => {
        new Isotope(iso.querySelector('.isotope-container'), {
          itemSelector: '.isotope-item',
          layoutMode: iso.dataset.layout || 'masonry',
          filter: iso.dataset.defaultFilter || '*',
          sortBy: iso.dataset.sort || 'original-order'
        });
      });
    });
  }

  // 9. Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const scrollMargin = parseInt(getComputedStyle(target).scrollMarginTop) || 0;
        window.scrollTo({
          top: target.offsetTop - scrollMargin,
          behavior: 'smooth'
        });
      }
    });
  });
});