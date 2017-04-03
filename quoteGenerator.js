$(document).ready(function() {
   $(".quoteBtn").click(function() {
      var url = "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";

      $.getJSON(url, function(data) {
         var quote = data.quoteText;
         var author = data.quoteAuthor;

         $(".theQuote").html(quote);
         $(".theAuthor").html(author);
console.log(data);
      });      
   });
});