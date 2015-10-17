Add NPM/JSPM dependencies
=========================

Install Git client
------------------
Needed by jspm.
- https://git-scm.com/download/win

Setup Node.js and NPM in Webstorm
---------------------------------
- File -> Settings... -> Languages and Frameworks -> Node.js and NPM
- Set node.exe path
- Install npm package (use -g option)

Create package.json
-------------------

Create a new file package.json and add project information.

Setup JSPM
----------

Add jspm to devDependencies in package.json.
Run 'npm update'.

Go to Webstorm Terminal and run 'jspm init'.

Change config.js to match example provided.

Run 'jspm update' to install jspm packages.

Update index.html
-----------------

Change index.html to load system.js from jspm_packages.
Remove system.js files from project directory.

Test with browser
-----------------

See in browser how module JavaScript files get loaded dynamically.

Create module bundle
--------------------

run "jspm bundle start dist/bundle.js"

Change index.html to include bundle.js (or create indexBundled.html)

Test with browser
-----------------

See in browser how bundle gets loaded.

Resources
---------
- https://github.com/jspm
- https://www.npmjs.com/



