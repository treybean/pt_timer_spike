var observer = new MutationSummary({
  callback: addTimerMarkupToStories,
  queries: [{
    element: '.details_container'
  }]
});

function addTimerMarkupToStories(stories) {
  console.log(stories);
  var storySummary = stories[0];

  $.each(storySummary.added, function(){
    $('.control_bar', this).append("<div class=\"clearfix\">Time me!</div>");
  });
}
