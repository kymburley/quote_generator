$(document).ready(function() {
   $(".quoteBtn").click(function() {
      $.ajax({
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
      })

   });

});