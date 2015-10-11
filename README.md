Hello World with two modules
============================

Install Webstorm 11 (EAP)
-------------------------
- https://confluence.jetbrains.com/display/WI/WebStorm+11+EAP

Install Node.js
---------------
- https://nodejs.org/en/

Create project
--------------
Create a new empty project in Webstorm

Setup Webstorm TypeScript
-------------------------
File -> Settings... -> Language and Frameworks -> TypeScript
- Enable TypeScript Compiler = true
- Node Interpreter = path to node.exe
- Compiler version = bundled
- Track changes = true
- Use tsconfig.json = true

Setup TypeScript module system
------------------------------
Setup module system to use. I went with system.js, because this seems to match the ES6 syntax used in Angular 2.0:
- Create tsconfig.json (see example provided)
Study tsconfig.json documentation:
- https://github.com/Microsoft/TypeScript/wiki/tsconfig.json
Download system.js and place it into top project directory
- https://github.com/systemjs/systemjs/tree/master/dist

Code...
-------
Create two modules with classes, the start.ts "bootstrap" script and a index.html.
Set the correct baseURL in index.html.
See examples provided.

Compile and Run...
------------------
Use Webstorm TypeScript compiler to compile and open index.html in browser.
Watch JavaScript loading with browser development tools.

Resources
---------

- TypeScript Hello World
  - http://www.typescriptlang.org/Samples#HelloWorld
  -  https://github.com/Microsoft/TypeScriptSamples/tree/master/greeter
- 

