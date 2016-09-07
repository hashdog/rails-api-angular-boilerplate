# Base app Rails 5 API + AngularJS
By ![HashDog Logo](https://hashdog.com/images/logo.svg)

## Getting started
Clone a boilerplate
```
git clone git@github.com:hashdog/rails-api-angular-boilerplate.git [project name]
```
Run bundle in project folder
```
bundle
```
Setup db
```
bundle exec rake db:setup
```
Install node and npm
```
https://nodejs.org/en/download/
```
Run npm install into frontend folder
```
sudo npm install lineman -g
sudo npm i
```
Edit client name from index page into frontend folder
```
nano +51 app/pages/index.html
```
Build frontend into frontend folder
```
lineman build
```
Return to root folder
```
cd ..
```
Copy frontend files to public
```
cp -R frontend/dist/* public/
```
Add changes in your new local repository
```
git add .
```
Commit the changes
```
git commit -m "First commit"
```
Replace the origin with the client repository URL (example: `git remote set-url origin git@github.com:user/repo.git`)
```
git remote set-url origin [new client repository URL]
```
Push the changes
```
git push origin master
```
Create an app on heroku with two enviroments, staging and production
```
heroku create -a staging-[app name] --remote staging
heroku create -a [app name] --remote production
```
Create a branch for production, and setup production branch as heroku master branch
```
git checkout -b production
```
Deploy the starter app for staging and production
```
git push staging master
git push production production/master
```
# App Components
- Ruby 2.2.3
- Rails 5 API
- Postgres db
- AngularJS
- Sass
- Bootstrap 3
