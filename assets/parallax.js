jQuery(document).ready(function($) {
  function applyParallaxEffect() {
    var targetDiv = $('.parallax-image');
    var targetImg= $('.parrlexImage'); // Change this to the specific div you want to apply the parallax effect to
    if (targetDiv.is(':visible')) {
      var difference = $(window).scrollTop() - targetDiv.offset().top;
      var differenceImg = $(window).scrollTop() - targetImg.offset().top;
      var half = (difference / 6) + 'px';
       var halfImg = (differenceImg / 6) + 'px';
      var transform = 'translate3d(0, ' + half + ', 0)';
      var transformImg = 'translate3d(0, ' + halfImg + ', 0)';
      targetDiv.css('transform', transform);
      targetImg.css('transform', transformImg);
    } else {
      targetDiv.css('transform', 'translate3d(0, 0, 0)');
      targetImg.css('transform', 'translate3d(0, 0, 0)');
    }
  }

  // Initialize Intersection Observer
  var options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
  };

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        applyParallaxEffect();
      }
    });
  }, options);

  // Observe the target div
  var targetDiv = $('.parallax-image');
  var targetImg = $('.parrlexImage');
  // Change this to the specific div you want to apply the parallax effect to
  observer.observe(targetDiv[0]); // Use [0] because Intersection Observer expects a DOM element, not a jQuery object
 observer.observe(targetImg[0]);
  // Apply the parallax effect on page load (if the div is already visible)
  applyParallaxEffect();

  // Update the parallax effect on window scroll
  $(window).scroll(function() {
    applyParallaxEffect();
  });
});
