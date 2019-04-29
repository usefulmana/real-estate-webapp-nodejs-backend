# Real estate MERN Web Application

Author: Nguyen Le Bao Anh <br>
RMIT Vietnam - Web Programming - Assignment III <br>
Repository: [Github](https://github.com/usefulmana/real-estate-webapp-nodejs-backend)


### Deployments <br>

- Backend REST APIs: zeit.co
- Database: MongoDB Atlas
- React application: Heroku

### API Endpoints <br>

With the exception of Property and Project APIs GET endpoints, all other endpoints are private meaning they require authentication to be used.

**For Properties**
| Method  | Endpoints   | Purpose  |   
|---|---|---|
| GET  | http://localhost:3000/property  | Get all properties  |  
| GET | http://localhost:3000/property/byId/id  |  Get a property by ID | 
| GET  | http://localhost:3000/property/byAddress/address  | Get properties by name | 
| POST  | http://localhost:3000/property  | Add a property  | 
| DEL  | http://localhost:3000/property/id  |  Delete a property | 
| PUT | http://localhost:3000/property/id  | Update a property | 
 
 **For Projects**
| Method  | Endpoints   | Purpose  |   
|---|---|---|
| GET  |http://localhost:3000/project  |  Get all projects |  
| GET | http://localhost:3000/property/byId/id  |  Get a project by ID | 
| GET  |http://localhost:3000/project/byAddress/address   | Get projects by name  | 
| POST  | http://localhost:3000/project  | Add a project  | 
| DEL  | http://localhost:3000/project/id |  Delete a project | 
| PUT | http://localhost:3000/project/id  |  Update a project | 

 **For User Accounts** <br>
*Additional header: x-auth-token*
 | Method  | Endpoints   | Purpose  |   
|---|---|---|
| GET  | http://localhost:3000/user/id  | Get a user by ID  |  
| GET |  http://localhost:3000/auth/user  | Get a user's information by web token |  
| POST  | http://localhost:3000/user  | Create a new user  | 
| POST  | http://localhost:3000/auth  | Login Authentication  | 
| PUT | http://localhost:3000/user/id  | Update a user's information  | 

### Pre-made User Accounts
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