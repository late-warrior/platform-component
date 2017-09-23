var page = require('webpage').create();
var url = 'http://localhost:8080';

page.open(url, function() {
  page.render('ph.png');
  phantom.exit();
});

