

1. Installation Instructions
Make sure you have the following versions of node and npm
Node >=6.9.5<7.x.x
Npm >=5.2
Go to Code/Server => Open terminal => npm install
Go to Code/Client => Open terminal => npm install
Go to Tests       => Open terminal => npm install
Set environment variable MONGODB_URI  "mongodb://admin:admin@ds163711.mlab.com:63711/temp_database"

2. Running app locally
Go to Code Folder => Server Folder =>   Open terminal => npm start
Go to Code Folder => Client Folder =>   Open terminal => npm start
Go to browser => open localhost:4200

3. Running tests locally
1. Client-side-tests 
Go to Code Folder => Client Folder =>   Open terminal => run npm t
2. Server-side tests  (These tests need an internet connection to be executed)
Go to Code Folder => Server Folder =>  Open terminal => run npm t

NOTE:   I have included unit tests for client side in the Tests folder (only for preview) but they are actually running from Code Folder.
	It is recommended by the angular team that angular unit tests be located near src files. https://angular.io/guide/testing#q-spec-file-location



4. Tests coverage along with tests
Go to Code/Server =>  Open terminal => npm run coverage => wait for completion => Code/Server/coverage/lcov-report/index.html
Go to Code/Client =>  Open terminal => npm run coverage => wait for completion => Code/Client/coverage/lcov-report/index.html



Note that the OS used for running and testing this app locally was Windows 10 64-bit