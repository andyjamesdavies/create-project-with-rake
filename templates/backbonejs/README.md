
#Build Script

Because we are using requirejs on this project we can use their optimizer to run a build script. 

Dependencies: 
- **Node:** Node 0.4.0 or later.
- **Java:** Java 1.6 or later.
	
Once you have the dependencies installed run this in your terminal:

	> npm install -g requirejs
	
This will install requirejs globally on your node install so you only need to do it once on a machine. Once this is installed you will be able to run the build script.

By default the build script will create a folder in the folder just above the project root named '{project}-build'.

To do this run the following from the project root folder:
	
	> sudo r.js -o ./assets/js/app.build.js
	
This will then run the build based on definitions placed within the app.build.js file.

For more info about requirejs optimization: http://requirejs.org/docs/optimization.html