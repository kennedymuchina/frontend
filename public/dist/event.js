$(document).ready(function() {
  let venue_html = $(".venue.content").html();
  venue_html = venue_html.split(",").join("<br />");
  $(".venue.content").html(venue_html);
  let details_html = $(".details.content").html();
  details_html = details_html.split(".").join(".<p></p>");
  $(".details.content").html(details_html);
});
