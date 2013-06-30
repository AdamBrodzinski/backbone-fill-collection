// Fill a collection with mock data
// uses filltext.com for requests, see their website for data options
//
;(function(){
  Backbone.FillCollection = Backbone.Collection.extend({
    url: 'http://www.filltext.com',

    fetch: function() {
      var collection = this,
          params;

      // if fillWith is used, call filltext.com api
      if (this.fillWith) {
        params = this.fillWith;

        // return 5 if no option is passed
        params.rows = params.rows || 5;

        $.ajax({
          type: 'GET',
          dataType: 'text json',
          url: this.url,
          data: params,

          success: function(data) {
            collection.reset(data);
            collection.trigger('change');
          },

          error: function(e, statusText) {
            if ('console' in window || typeof console !== 'undefined') {
              var message = 'There was an error with your request \n';
              console.log(message, e.status, statusText);
            }
          }
        });
      }
    }
  });
})();

