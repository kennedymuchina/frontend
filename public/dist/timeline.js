(function($) {
  $.fn.timeline = function() {
    let selectors = {
      id: $(this),
      item: $(this).find('.timeline-item'),
      activeClass: 'timeline-item--active',
      img: '.timeline__img',
    };
    selectors.item.eq(0).addClass(selectors.activeClass);
    // selectors.id.css(
    //   "background-image",
    //   "url(" +
    //     selectors.item
    //       .first()
    //       .find(selectors.img)
    //       .attr("src") +
    //     ")"
    // );
    let itemLength = selectors.item.length;
    $(window).scroll(function() {
      let max; var min;
      let pos = $(this).scrollTop();
      selectors.item.each(function(i) {
        min = $(this).offset().top;
        max = $(this).height() + $(this).offset().top;
        let that = $(this);
        if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
          selectors.item.removeClass(selectors.activeClass);
          // selectors.id.css(
          //   "background-image",
          //   "url(" +
          //     selectors.item
          //       .last()
          //       .find(selectors.img)
          //       .attr("src") +
          //     ")"
          // );
          selectors.item.last().addClass(selectors.activeClass);
        } else if (pos <= max - 60 && pos >= min) {
          // selectors.id.css(
          //   "background-image",
          //   "url(" +
          //     $(this)
          //       .find(selectors.img)
          //       .attr("src") +
          //     ")"
          // );
          selectors.item.removeClass(selectors.activeClass);
          $(this).addClass(selectors.activeClass);
        }
      });
    });
  };
})(jQuery);

$('#innovation').timeline();
$('#mentorship').timeline();
$('#training').timeline();

$('.smooth-goto').on('click', function() {
  $('html, body').animate({ scrollTop: $(this.hash).offset().top - 50 }, 1000);
  return false;
});
