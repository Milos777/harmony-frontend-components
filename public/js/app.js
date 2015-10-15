// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
//$(document).foundation();

if(Modernizr.mq('only screen and (min-width : 481px) and (orientation : portrait)')) {
      $('meta[name=viewport]').attr('content','initial-scale=0.6, width=1000');
} else if(Modernizr.mq('only screen and (min-width : 680px) and (orientation : landscape)')) {
      $('meta[name=viewport]').attr('content','initial-scale=0.9');
}