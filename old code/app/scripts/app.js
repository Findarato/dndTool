(function (document) {
  'use strict';
  
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');
  app.appName = 'Dragons';
  app.version = '0.0.2';

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('template-bound', function() {
    console.log('Our app is ready to rock!');
  });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
