"use strict";

document.addEventListener('mdl-componentupgraded', function() {
  var twitterWidgetScript = document.createElement("script");
  twitterWidgetScript.src = "https://platform.twitter.com/widgets.js";
  twitterWidgetScript.charset = "utf-8";
  twitterWidgetScript.async = "async";
  
  var outerTwitterWidget = document.getElementById("twitterTimeline");
  outerTwitterWidget.appendChild(twitterWidgetScript);
});