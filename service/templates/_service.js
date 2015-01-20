'use strict';
angular.module('<%= module %>')
.service('<%= name %>', function () {
  console.log('Hello from your <%= name %> service');
<% if(options.sample === 'start') {%>
  // some initial data
  this.someData = {
    binding: 'Yes! Got that databinding working'
  };
<% } %>
  // TODO: do your service thing
});
