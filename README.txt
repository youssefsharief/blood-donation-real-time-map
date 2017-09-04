

1. Installation Instructions

Make sure you have the following versions of node and npm
	Node >=6.9.5<7.x.x
	Npm >=5.2
Go to Code Folder  => Server Folder => Open terminal => npm install
Go to Code Folder  => Client Folder => Open terminal => npm install
Go to Tests Folder =>                  Open terminal => npm install
Set environment variable MONGODB_URI  "mongodb://admin:admin@ds163711.mlab.com:63711/temp_database"

2. Running app locally
Go to Code Folder => Server Folder =>   Open terminal => npm start
Go to Code Folder => Client Folder =>   Open terminal => npm start


Running tests locally
•	Client-side-tests
o	Go to Code Folder => Client Folder =>   Open terminal => run npm t

•	Server-side tests  (These tests need an internet connection to be executed)
o	Go to Code Folder => Server Folder =>  Open terminal => run npm t
•	To include coverage results in tests

Tests coverage results
Go to Code Folder => Client Folder =>   Client Folder => Double click index.html
Go to Code Folder => Server Folder =>   Open terminal => npm run coverage


Note that the OS used for running and testing this app locally was Windows 10 64-bit