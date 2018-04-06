# fullStack_server

###### Tech
>dependencies
1-express
2-passport
3-passport-google-oauth20


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
-http://console.developers.google.com/
-create new project.  i called it *fullstack-server-dev*
-search for google+ api and enable it
-click on credentials...
-pick oauth clientid
-click on configure consent screen 
-fill in product name *fullstack-server-dev*
-pick web application
-authorized java script origins : http://localhost:5000
-authorized redirect url : ** http://localhost:5000/auth/google/callback
-pop-up with creds...
  client id:  a public token..okay to share. 
    
  client secret:  this needs to be secured 
 
###### Oranization
> flow
-config
-routes
-services 
-index.js



     