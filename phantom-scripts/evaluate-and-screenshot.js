var page = require('webpage').create();
var url = 'http://localhost:8080';
page.open(url, function(status) {
  page.evaluate(function() {
      tidy.constructGrid('root-1');
  });
  page.render('eval.png');
  phantom.exit();
});
