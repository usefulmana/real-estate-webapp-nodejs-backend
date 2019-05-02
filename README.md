# Real estate MERN Web Application

Author: Nguyen Le Bao Anh <br>
RMIT Vietnam - Web Programming - Assignment III <br>
Repository: [Github](https://github.com/usefulmana/real-estate-webapp-nodejs-backend)


### Deployments <br>

- Backend REST APIs: Heroku
- Database: MongoDB Atlas
- React application: Heroku

### API Endpoints <br>

With the exception of Property and Project APIs GET endpoints, all other endpoints are private meaning they require authentication to be used.

**For Properties** <br>

| Method  | Endpoints   | Purpose  |   
|---|---|---|
| GET  | https://express-estate.herokuapp.com/property  | Get all properties  |  
| GET | https://express-estate.herokuapp.com/property/byId/id  |  Get a property by ID | 
| GET  | https://express-estate.herokuapp.com/property/byAddress/address  | Get properties by name | 
| POST  | https://express-estate.herokuapp.com/property  | Add a property  | 
| DEL  | https://express-estate.herokuapp.com/property/id  |  Delete a property | 
| PUT | https://express-estate.herokuapp.com/property/id  | Update a property | 
 
 **For Projects** <br>

| Method  | Endpoints   | Purpose  |   
|---|---|---|
| GET  |https://express-estate.herokuapp.com/project  |  Get all projects |  
| GET | https://express-estate.herokuapp.com/project/byId/id  |  Get a project by ID | 
| GET  |https://express-estate.herokuapp.com/project/byName/name   | Get projects by name  | 
| POST  | https://express-estate.herokuapp.com/project  | Add a project  | 
| DEL  | https://express-estate.herokuapp.com/project/id |  Delete a project | 
| PUT | https://express-estate.herokuapp.com/project/id  |  Update a project | 

 **For User Accounts** <br>
*Additional header: x-auth-token*

 | Method  | Endpoints   | Purpose  |   
|---|---|---|
| GET  | https://express-estate.herokuapp.com/user/id  | Get a user by ID  |  
| GET |  https://express-estate.herokuapp.com/auth/user  | Get a user's information by web token |  
| POST  | https://express-estate.herokuapp.com/user  | Create a new user  | 
| POST  | https://express-estate.herokuapp.com/auth  | Login Authentication  | 
| PUT | https://express-estate.herokuapp.com/user/id  | Update a user's information  | 

### Pre-made User Accounts <br>

|  Email | Password  |
|---|---|
|   |   |
|   |   |
|   |   |


### Dependencies
 - bcrypt
 - body-parser
 - config
 - cors
 - nodemon
 - express
 - mongoose
 - jsonwebtoken