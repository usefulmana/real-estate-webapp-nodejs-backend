# Real estate MERN Web Application

Author: Nguyen Le Bao Anh <br>
RMIT Vietnam - Web Programming - Assignment III <br>
Website: [Link](https://react-real-estate-wp.herokuapp.com)
Repository: [Github](https://github.com/usefulmana/real-estate-webapp-react-frontend)


### Deployments <br>

- Backend REST APIs: Heroku
- Database: MongoDB Atlas
- React application: Heroku

### To Start Locally <br>
- This project is divided into two folders one for front-end and one for back end.
- Install packages on each folder by using **npm install**
- Start each folder by entering **npm start**
  
### Pre-made User Accounts <br>

|  Email | Password  |
|---|---|
| rmit@gmail.com  |  123456 |
| rmit1@gmail.com  | 123456  |
| rmit2@gmail.com | 123456  |
| rmit3@gmail.com | 123456  |
| rmit4@gmail.com | 123456  |

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

### Dependencies
 - bcrypt
 - body-parser
 - config
 - cors
 - nodemon
 - express
 - mongoose
 - jsonwebtoken

 ### Assumptions
- When creating an ad, post date and expiration date (90 days after post date) is automatically determined recorded by the database.

### Report
- I used a token-based authentication system for this project which is provided by a library called jsonwebtoken. This library is chosen because it is powerful and relatively easy to use. 
- Each user upon login or register will be granted a token which will be stored in session storage for security reason. When logging out or closing the tab, the token will be deleted.
- Each user can only CRUD their own ads and projects.
