document.addEventListener('DOMContentLoaded', function() {
  console.log("Hello World");

  function waitForElement(selector, callback) {
    const el = document.querySelector(selector);
    if (el) return callback(el);
  
    const observer = new MutationObserver(() => {
      const el = document.querySelector(selector);
      if (el) {
        observer.disconnect();
        callback(el);
      }
    });
  
    observer.observe(document.body, { childList: true, subtree: true });
  }
    
  waitForElement('.partner-swiper', (el) => {
    var partner_swiper = new Swiper('.partner-swiper', {
      slidesPerView: "auto",
      spaceBetween: 94,
      loop: false,
      freeMode: true,
      freeModeMomentum: false,
      speed: 8000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      allowTouchMove: false
    });
  });
    
});