$(document).ready(function() {
   $(".quoteBtn").click(function() {
      var url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
      $.getJSON(url, function(json) {
         $(".theQuote").html(json.quoteText);
         $(".theAuthor").html(json.quoteAuthor);

      });
/*      $.ajax({
         url: "http://api.forismatic.com/api/1.0/",
         jsonp: "jsonp",
         dataType: "jsonp",
         data: {
            method: "getQuote",
            lang: "en",
            format: "jsonp"
         },
         success: function(data) {
            console.log(data);
            $(".theQuote").html(data.quoteText);
            $(".theAuthor").html(data.quoteAuthor);
         },
         error: function(errorMsg) {
            console.log(errorMsg);
         }
      })*/

   });

});