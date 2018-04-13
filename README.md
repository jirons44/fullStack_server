# fullStack_server
     
## Tech
- express
- Mongoose
- passport
- passport-google-oauth20
- cookie-session
### Oranization
- config
- routes
- services 
- index.js
###### authentication
- Request comes in
- Cookie-Session Extracts cookie data
- Passport pulls user id out of cookie data
- deserialize User a func to turn user id from cookie into a user from mongoDb
- User model instance added to req object as 'req.user'
- request sent to route handler ( now has user )

###### deployed on Heroku:  
> must have:
 -dynamic PORT binding, 
 -specify NODE environment, 
 -start script
 -.gitignore for node_modules
 
>downloaded heroku cli using brew install heroku/brew/heroku
 -heroku CLI commands
 -heroku -version
 -heroku login
 -heroku create  : 
     returns nam of app and git deployment target repository, e.g.
     
     *** use target repo ....add a remote repository to our current repository and name it 
     git remote add heroku somename.git
     
     
     git push heroku master : tell git to push our repository, can be used everytime to refresh ur code
     
     heroku open  : will open the web browser using heroku URL or just use URL
     
     heroku logs  : show logs

###### Sign-up with google oauth

 - http://console.developers.google.com/
 - create new project.  i called it *fullstack-server-dev*
- search for google+ api and enable it
- click on credentials...
- pick oauth clientid
- click on configure consent screen 
- fill in product name *fullstack-server-dev*
- pick web application

- authorized java script origins : http://localhost:5000

- authorized redirect url : ** http://localhost:5000/auth/google/callback

- pop-up with creds...
  client id:  a public token..okay to share. 
    
  client secret:  this needs to be secured 

# client react app 
## run create-react-app client

### script result 
- Success! Created client at /Users/jiron/workspace/playground/grider/fullstack/fullStack_server/client
Inside that directory, you can run several commands:

 - yarn start
    Starts the development server.

 - yarn build
    Bundles the app into static files for production.

 - yarn test
    Starts the test runner.

 - yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

- We suggest that you begin by typing:

   cd client
  yarn start

### notes

- this install also creates a built in 'server'. u can run 'npm start' while in the client directory.  This will 
launch the browswer localhost:3000 and display a react boilerplate web app.
launch the browswer localhost:3000 and display a react boilerplate web app.

- so we have two servers....reason why you want to have a 2nd sever for development.
- Our express fullstack_server is only responsible for pulling out of mongo and returning JSON.
- React side of our app, react server created by 'create-react-app'...will take component files bundle.js 
using webpack and babel

But Why?  we can put together...let express server up bundle.js.  yes we can.  reason...best way to start a react app
some many built in features...webpack...dependencies....fast way to start.  saves time. worth to figure out 
how to make react and our server work together.

challenge is how to make them work together...

can open two terminal windows...one in main root directory 'npm run dev' and 
one in sub directory 'client' then run npm start.

OR

run in one terminal using command 'concurrently' in package.json
...we have two package.json files....one server and one client
...add on two additional scritps in package.json in server
....."client": "npm run start --prefix client"  -runs in client directory



  