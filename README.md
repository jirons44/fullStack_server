# fullStack_server

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
      https://limitless-brushlands-70793.herokuapp.com/ | https://git.heroku.com/limitless-brushlands-70793.git
     
     *** use target repo ....add a remote repository to our current repository and name it 
     git remote add heroku https://git.heroku.com/limitless-brushlands-70793.git
     
     
     git push heroku master : tell git to push our repository
     
     heroku open  : will open the web browser using heroku URL or just use URL
     
     heroku logs  : show logs
     