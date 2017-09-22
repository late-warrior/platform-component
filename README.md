## What

Simple repo to play around with HOC's and experiment with the idea of having multiple versions of a component
each targeted towards a particular browser (eg. PhantomJS, Firefox etc)

### Develop

* Clone the repo and run yarn to install deps
* Run ``yarn run build`` to build
* Run ``python -m SimpleHttpServer 8000`` to bring up a sample server   
* The ``index.html`` contains the container dom elements which we use to mount our react components 
* Run ``phantomjs phantom-scripts/<any.js>`` to run the specific phantomjs script 


