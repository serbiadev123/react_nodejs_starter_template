# DATABASE MANIPULATION WITH SEQUALIZE
Backend is using NodeJS + Express + Sequalize.

In order to work with the database, you will need to familiarize your self with Sequalie ORM. And do take in consideration that we implemented a typescript version, so not everything is the same.
Make sure that you rename the `.env.example` file to `.env` and change the values with values from your computer.

## CREATING A NEW DATABASE

If we want to create a new database, we need to create the model and the migration. Multiple databases are supported in a single project. So you will need to create additional models for each additional database.
After creation of the migration files run the command: `sqlz:migrate1` or `sqlz:migrate2` to migrate the existing data. It will create the tables in the appropriate database based on the configuration of Sequalize and env variable of the `sqlz:migrate1` script. More information on the script you can find in package.json file.

### Model creation:
By creating a model, we define the database attributes, and relationship to other databases. Sequalize supports oneToOne, oneToMany, ManyToMany using pivot tables and much more. Models are located in: `backend\src\sqlz\models\modelName`. If you are using multiple databases make sure to create multiple model classes. Creating a new model consists of 4 parts. 
1. Defining a class
2. Defining the classModel attributes
3. Initializing the model
4. Connecting it to other models

Here is an example of creating onde model: 
``` javascript
import { Model, STRING } from 'sequelize'
import sequelizeDbs from '../_index'
import { UserRoleDb1 } from '../userRole/userRoleDb1'

export class AppUserDb1 extends Model {
    id: string
    email: string
    username: string
    firstName: string
    lastName: string
    pwd: string
    UserRole: UserRoleDb1
    createdAt: Date
    updatedAt: Date
}

if (!sequelizeDbs || sequelizeDbs.length < 1) {
    throw new Error('Invalid sequalize settings, missing DB1 settings')
}

AppUserDb1.init(
    {
        email: STRING(50),
        username: STRING(50),
        firstName: STRING(50),
        lastName: STRING(50),
        pwd: STRING(50)
    },
    { sequelize: sequelizeDbs[0], modelName: 'AppUser' }
)

AppUserDb1.belongsTo(UserRoleDb1, {
    foreignKey: 'userRoleId'
})
```

As you can see we are connecting our model to a specific Sequalize instance in order to support multiple database connections. THe databases are read from the `backend\src\sqlz\config\config.ts`, and you can see the code which creates the array containing the databases connections at: `backend\src\sqlz\models\_index.ts` 
For additional references you can check the sequalize documentation. Just make sure you follow the way of creating the file, because in the examples they are not using typescript.

### Creating the database itself (migration)
In order to actualy create the database, we must create a migration file, which will be used to automatically create the new database with appropriate fields.

To create a new migration, you can run the command `npm run sqlz:new NameOfTheFile`.
This will create the new migration file at: `backend\src\sqlz\migrations` . Migrations are executed one by one, so make sure if you have 2 databases from which one has a foreign key in the other one, to first migrate the other one. The `sqlz:new` command will create a file for you, but the file data must follow the example of existing migrations in order to work.
Make sure that the miliseconds in the name of the file are set in a proper order, because running the migrate command will execute the migration one file at the time. So if you have a foreign key in one migration, and the databases to which current one is conneted is in the next file, you will get an error. 

For how exactly to add new attributes, you can check in the sequalize documentation, but how a file should look like, you can see in this example. Make sure to follow it, but change the fields and values you want to add:
``` javascript
module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('Languages', {
        id: {
            allowNull: false,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true
        },
        label: {
            allowNull: false,
            type: Sequelize.STRING(255)
        },
        name: {
            allowNull: false,
            type: Sequelize.STRING(50),
            unique: true
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        }
        })
    ,
    down: (queryInterface, Sequelize) => queryInterface.dropTable('Languages')
}

```

### Seeding
In order to initialy seed the database, you will need to run the seed command: `npm run sqlz:seed1` or `npm run sqlz:seed2` , --debug is optional to see the full console log print and possible errors. Make sure you seed after the migration, so the sequalize has the database to write to.

Also in order to avoid forgeting names of some existing database elements you created in the previous seeding files, you can create objects (like enums), and reuse them in the future seed files. Also you can query the existing database to retrieve elements which you need to create connection to new database elements.

Here are 2 examples. First one is basic role type seed:
``` javascript
'use strict';

const uuidv4 = require('uuid/v4');

const USER_ROLES = {
    GUEST: 'GUEST',
    USER: 'USER',
    ADMIN: 'ADMIN'
}

module.exports = {
    up: (queryInterface, Sequelize) => {
        const keys = Object.keys(USER_ROLES);

        const userRoles = keys.map((key)=>{
            return {
                id: uuidv4(),
                name: key,
                createdAt : new Date(),
                updatedAt : new Date()
            }
        })

        return queryInterface.bulkInsert('UserRoles', userRoles, {});
    },

    down: (queryInterface, Sequelize) => {
        const keys = Object.keys(USER_ROLES);

        const userRoles = keys.map((key)=>{
            return {
                name: key,
            }
        })
        
        return queryInterface.bulkDelete('UserRoles', userRoles)
    },

    USER_ROLES
};

```

And the second one is using the roles defined here, extracting those elements from the database, and creating users:
``` javascript
'use strict';

const USER_ROLES = require('./20191129043835-user_roles').USER_ROLES;
const uuidv4 = require('uuid/v4');
const bcrypt = require('bcrypt');

const defineInitialUsers = async queryInterface => {
    const users = []

    const ADMIN = {
        id: uuidv4(),
        email: 'admin@admin.gmail',
        username: 'admin',
        firstName: 'fradmin',
        lastName: 'lsadmin',
        pwd: bcrypt.hashSync('admin', 10),
        createdAt : new Date(),
        updatedAt : new Date(),
    }
    
    const USER = {
        id: uuidv4(),
        email: 'user@user.gmail',
        username: 'user',
        firstName: 'fruser',
        lastName: 'lsuser',
        pwd: bcrypt.hashSync('user', 10),
        createdAt : new Date(),
        updatedAt : new Date(),
    }

    let adminRoleId = null

    try{
        adminRoleId = await queryInterface.rawSelect('UserRoles', {
            where: {
                name: USER_ROLES.ADMIN,
            },
        }, ['id']);
    } catch(e) {
        console.log('Error getting admin role, skipping admin creation. ERROR:', e)
    }

    if (adminRoleId) {
        ADMIN['userRoleId'] = adminRoleId
        users.push(ADMIN)
    }

    let userRoleId = null
    
    try{
        userRoleId = await queryInterface.rawSelect('UserRoles', {
            where: {
                name: USER_ROLES.USER,
            },
        }, ['id']);
    } catch(e) {
        console.log('Error getting user role, skipping user creation. ERROR:', e)
    }

    if (adminRoleId) {
        USER['userRoleId'] = userRoleId
        users.push(USER)
    }

    return users
}


module.exports = {
    up: async (queryInterface, Sequelize) => {
        const users = await defineInitialUsers(queryInterface)

        return queryInterface.bulkInsert('AppUsers', users, {});
    },

    down: async (queryInterface, Sequelize) => {
        let users = await defineInitialUsers(queryInterface)
        users = users.map((user)=> {
            return {username: user.username}
        })
        
        return queryInterface.bulkDelete('AppUsers', users)
    }
};

```

## Routing
In order for our server to expose our code, we must create a Route which will be seen by outside clients.
All of our routes are located at: `backend\src\routes\_index.ts`. In order to not keep all the routes in one file, they are seperated by functionality in subfiles. So in order to create a totaly new route, you will have to create a file in the same folder following existing examples:
``` javascript
import { Express } from 'express'
import { AppUserController } from '../endpoints/_index'
import { auth } from '../endpoints/middleware/auth'
import validation from '../endpoints/middleware/validation'
import { CreateUserValidationRules, LoginUserValidationRules } from '../endpoints/appusers/_index'
import { USER_ROLES } from '../enums/userRoles'

export function routes(app: Express) {
    app.get('/api/appUsers', auth, AppUserController.AppUserGet.list)
    app.post(
        '/api/appUsers',
        auth([USER_ROLES.ADMIN]),
        CreateUserValidationRules(),
        validation,
        AppUserController.AppUserPost.create
    )

    app.post(
        '/api/appUsers/login',
        LoginUserValidationRules(),
        validation,
        AppUserController.AppUserPost.login
    )
}
```

This is a complex example which also includes an auth (authentication middleware), validation and validation rules (express-validator) which will be explained in details.
If we want to use a simple route, then all we will need is the actual path and the controller function which will deal with processing the route:
``` javascript
app.post(
    '/api/appUsers/login',
    AppUserController.AppUserPost.login
)
```

## Controllers
To process a route, we will need a controller.
Controllers are located at: `backend\src\endpoints`. And just as a route group, they are seperated per functionality. Mostly if you created a new file for the new route group, you will need a new folder for the new controller group.
In that folder you will need a `_index.ts` which will just group all the function from the individual controller files:
``` javascript
import * as LanguageGet from './languages.get'
import * as LanguagePost from './languages.post'

export { LanguageGet, LanguagePost }
```
And you need to create individual files, for controllers actions (like `languages.get.ts`, `languages.post.ts`)
Mostly those functions will call the databases access objects (DAO), and maybe have some additional code to process data. For request body validation, we have a imddleware and there is no need to do it manually.

### Request body validation
To validate the request body we are using `express-validator`.
To each route which need validation, we will add a middleware containing the validation rules, and the validation middleware:
``` javascript
app.post(
    '/api/appUsers/login',
    LoginUserValidationRules(),
    validation,
    AppUserController.AppUserPost.login
)
```
Validation file should be located in the controller folder. Example for users data validation: `backend\src\endpoints\appusers`.
``` javascript
import { check } from 'express-validator'

export const CreateUserValidationRules = () => {
    return [
        check('pwd', 'Password is required').notEmpty(),
        check('email', 'Email is required').notEmpty(),
        check('email', 'A valid email is required').isEmail()
    ]
}

export const LoginUserValidationRules = () => {
    return [
        check('pwd', 'Password is required').notEmpty(),
        check('username', 'Username or Email is required').notEmpty()
    ]
}
```
Additional validation rules can be checked in the `express-validator` documentation.

`validation` middleware will probably not need to change. It is not dependant on individual validation rules, so the code will not need to change, if the validation definitions change.

## Route Authentication
In order to protect the routes so only authenticated users can access them, all you need to do is pass the auth middleware with array of appropriate permissions from the `backend\src\enums\userRoles.ts` . 
Example:
``` javascript
app.post(
	'/api/appUsers',
	auth([USER_ROLES.ADMIN]),
	CreateUserValidationRules(),
	validation,
	AppUserController.AppUserPost.create
)
```
## Database access object (DAO)
To manipulate the database objects, we will use the DAO folder: `backend\src\dao`. For each new controller folder (group) you add, you will need a DAO file to manipulate the approporiate databases connected to that controller. Add the new file in the same folder, and make sure you also include it in the `_index.ts` file for easier use in the project. 
Here is an example:
``` javascript
import * as uuid from 'uuid'
import { AppUser } from './../sqlz/models/appuser'
import { UserRole } from '../sqlz/models/userRole'
import { DATABASE_SEARCH_RESULT } from '../enums/databaseSearchResults'
import { Op } from 'sequelize'
const {or, and, gt, lt} = Op

export function findAll(): Promise<any> {
  return AppUser
    .findAll({ include: [{ all: true }] })
}

export function login(appUser: any): Promise<any> {
  return AppUser
            .findOne({
                where: {
                    email: appUser.username,
                    pwd: appUser.pwd
                },
                [or]: [
                    {
                        where: {
                            username: appUser.username,
                            pwd: appUser.pwd
                        }
                    }
                ],
                include: [UserRole]
            })
            .then(user => {
                if (!user) {
                    throw DATABASE_SEARCH_RESULT.NOT_FOUND
                }
                return user
            })
}
```

For additional information you can check the sequalize documentation on how to exactly query the database.
If you are not returning the found data in the database, make sure to return the ERROR on other messages as an ENUM located at: `backend\src\enums\databaseSearchResults.ts` . Add additional statuses if needed. This is needed so we can return appropriate errors from the controllers.

## Returning the data from the controller
To stay consistent, when returning the success or error messages we must always use the `Boom` library. It has many different error codes, and it follows the best web standards. You can check the Boom documentation on additional information.