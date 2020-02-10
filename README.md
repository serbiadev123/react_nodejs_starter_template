
# distributed_database_systems

Final project for distributed database systems for Tsinghua University.
Application consists of single page (**React**) application -> **frontend folder**
supported by a API server (**nodeJS**) backend -> **backend folder**.

# Starting the application
## Front End

Make sure you have node.js installed. Download from [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

Go to the frontend folder.

- make sure you have an .env file with following variables:
  - REACT_APP_SERVER_URL - current url of the front end server (include the http/s)
  - REACT_APP_API_SERVER_URL - current url of the backend server for API calls
- install the npm packages : **npm install**
- update the npm packages if needed: **npm update**
- run the front end server: **npm start**

## Back End
Make sure you have node.js installed. Download from [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

Go to the backend folder.

- make sure you have a config json file named exactly as this one: `backend\config\default.json` with following variables:
  - myprivatekey - can be any string. It is used for token hashing. Make sure to give it some unique name
- install the npm packages : **npm install** (sometimes the npm install get stuck, if it happens make sure to run it as admin, and wait couple of minutes)
- update the npm packages if needed: **npm update**
- run the back end server: **npm start**

Sometimes after updating the typescript files, the javascript files don't get updated. IIf this is your case just stop the npm start command and start it again. This will rebuild the javascript.

### Setting up the database connection:
We are using sequalize, and it has a configuration file located at: `backend\src\sqlz\config\config.json`. We are using development settings for our testing purposes (not sure how to actualy select a different setting), so add your database information to that object. For each param explanation you can check the sequalize documentation.
After running the database server, and filling valid database information you need to run the migration command:
 - `npm run sqlz:migrate` which will create the databases.
And then you need to run the seeder:
 - `npm run sqlz:seed` which will input the initial basic data to the database.
For a list of commmands you can go to `backend\package.json` and see them all there. For any additional commands you might need, like creating a new seeder or migration file, you can just use the sequalize path and run any sequalize command from the sequalize documentation. Make sure to read the backend documentation in more details to follow the best practise.
# FRONT END
Front end is done in react. Detailed explanation on how to develop and/or use it can be found here: **[Front End documentation](docs/frontend/INFO.md)**

# BACK END
Back end is done in nodeJs. Detailed explanation on how to develop and/or use it can be found here: **[Back End documentation](docs/backend/INFO.md)**
