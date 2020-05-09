# Share
 generate links to share your snippet 

[![GitHub license](https://img.shields.io/github/license/Souvikns/Share?style=plastic)](https://github.com/Souvikns/Share/blob/master/LICENSE)

---


## Vison 

Right now the application just provides code highlighting for some of the programming language. 

What we want to build a platform which will help coders to review others code, and give valuable feedback. 

To attain this we need to follow some patterns to build this application 


- What I want to achive is that create an authentication model and store users and to able to create **access rights** and manage who can change **modify** the code. Also to store the generated code so that users can get all thier generated *urls* in one place. 

- Show differenes of other users that have changed the code 
    - like what new additions or deletions they have made to the code. 

- Able to add realtime code changes among users so that people can change and manage to code in realtime with others. 

### Some features that we can build in the future 

- To run and output the code shared by others 
- Also to support multiple files at a time 
- pull codebase from github or other online repositories 

---

## About Codebase

As this application is built on **MERN** stack and hosted in heroku platform. **React** is used for the front end paired with **Express** backend for api. 

For data storage **Airtable** is used, as the application is still in developement stage. Once we get users we will move to mongodb 

---

## Setup Local Dev Server 

Follow the steps to for to setup for local server 

1. clone the repository 
2. run `npm install` to install dependencies 
3. now to install the dependencies for the client run `cd client` and then run `npm install`. By now all the dependencies are downloaded now you can start the dev server 
4. Go to the root directory if your in the client directory, run `cd ..` to go to the root directory. 
5. run `npm run dev-server` to spin up the express server 
6. run `npm run dev-client` to spin up the react dev server 


---

## Contributing Guidelines 

To contribute please follow the guidelines 

- Fork this repo to create any pull request 
- Clone your forked repo 
- Make changes 
- Create pull request 


**Before making any changes raise a issue and have a discussion with the maintainers first**
