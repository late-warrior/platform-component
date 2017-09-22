var page = require('webpage').create();
page.open('http://shakti02.hyd.deshaw.com:8000', function(status) {
  var title = page.evaluate(function() {
    djsTidy.constructGrid('root-1');
  });
  page.render('eval.png');
  phantom.exit();
});
