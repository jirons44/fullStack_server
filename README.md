# fullStack_server
     
## Tech
    server-side:
    
    express
    Mongoose
    passport
    passport-google-oauth20
    cookie-session
    
    Client-side:
    
    react
    redux
    react-redux
    react-router-dom
    
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

#### set up server and client scripts

    This install also creates a built in 'server'. u can run 'npm start' while in the client directory.  This will 
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
    
    run in one terminal using command *'concurrently'* in package.json
    ...we have two package.json files....one server and one client
    ...add on two additional scritps in package.json in server
    ....."client": "npm run start --prefix client"  -runs in client directory

#### Dev mode - via proxy set-up

    config client to hit server port 5000
    update client package.json and add a "proxy" object to point to dev domain
  
    create-react-app...uses proxy object, will re-route to serverlocalhost:5000
  
    * only for dev...when building for prod...the create-react-app server doesn't even exist ..see below
  
    in prod, when our app loads up..browser recognized the domain\app url...so proxy won't be needed, nor cors.

#### prod mode - build
    
    In production, 'create-react-app' server *DOES NOT EXIST*, only for dev.
    Before we go to prod, we are going to build our react project....
    create-react app will run webpack and babel and save a prod build in the public folder 
    here. bundle.js   
     
    in production, express our server, will use public folder and its 
    assests(.js bundle, css, etc..) and push to client.
      
    *NPM RUN BUILD*....will create prod build in public foler with two files.  
    main.someHasCode.js and 
    main.someHashCode.js.map

#### async-await

    ES2017 Promise added with this version.  see asyncAwaitTempjs
    
    
#### client
    index.js - data layer control ( redux )
    App.js   - Rendering layer control ( React Router )
        -Landing
        -Header
        -Dashboard -> surveyList -> SurveyListItem
        -SurveryNew -> SurveyField
    
#### CSS for this project 
    http://materializecss.com/ - stricly CSS e z to customize...
        partial works with React...plug ins might not work
    
    per the instructions u can link using cdn...but
    but...its becoming popular to use npm 
        npm install materialize-css@next
        
        in node-modules you can find materialize-css..dist/css/materialize.min.css 
        is the file we want to import.
        
    instructions to hook up
        create react app uses webpack to condense.
        
        webpack loader for css files, include it as css
        
        
    
    https://www.material-ui.com/#/   javascript based styling...challenging to change look.
