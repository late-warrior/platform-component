var page = require('webpage').create();


page.open('http://shakti02.hyd.deshaw.com:8000', function() {
  page.render('ph.png');
  phantom.exit();
});

