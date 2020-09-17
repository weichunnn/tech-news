# Alps - News
## Overview
A personal project / web application used to gather latest news and allow user to filter news based upon preference, built mainly with ***ReactJS, Context API, JavaScript, and CSS***.

Link to app: [Alps-News](https://quiet-ridge-59002.herokuapp.com/)
* Note: Articles in deployment are not viewable as NewsAPI is only accessible in production (localhost) due to third-party server configuration. 

## Project Screenshots
<p align="center" width="100%">
  <img src='/screenshots/mainPage.jpg' width='75%' alt='Main page'>
    <p align='center'>Main Page</p>
</p>
<p align="center" width="100%">
  <img src='/screenshots/signUp.jpg' width='75%' alt='Sign Up page'>
    <p align='center'>Sign Up Page</p>
</p>
<p align="center" width="100%">
  <img src='/screenshots/selectionMenu.jpg' width='75%'alt='Selection Menu page'>
    <p align='center'>Selection Menu Page</p>
</p>
<p align="center" width="100%">
  <img src='/screenshots/articles.jpg' width='75%' alt='Articles layout'>
    <p align='center'>Articles Layout</p>
</p>

## Technologies Used
* ReactJS
* ExpressJS
* Mongoose
* NodeJS
* Context API
* Styled-Components
* JsonWebToken
* Middleware Proxy
* Bcryptjs
* React Hooks
* Axios
* dotenv
* Colors
* HTML
* CSS

## Usage
Clone project 
```bash
git clone https://github.com/weichunnn/tech-news.git
```

Install dependencies
```bash
npm install 
npm run client-install
```
Environment Variables Setup
```bash
/config/config.env file 
mongoURI = ... # Available from MongoDB Atlas
jwtSecret = ... # Any string of your choice
```
```bash
/client/.env
REACT_APP_NEWSAPI_API_KEY = ... # Available from https://newsapi.org/ upon setting up account
```
Run Server

```bash
npm run dev     # Express & React :3000 & :5000
npm run server  # Express API Only :5000
npm run client  # React Client Only :3000
```

## Project Goals
This is a 3 weeks long project built during my free time every night after work. The main project goal is to create a web application that is able to serve tech news from different news sources. However, after researching the WWW, I find that there is no way to pull tech-related news only from existing APIs. Hence, I diverted my goal into creating a news app that gathers updated news from all over the world.

One of the main challenges I ran into was styling using pure CSS. This was a challenge I set to myself to understand the usage of CSS. This led me to spend many days on research into many tips and tricks into using CSS. Another challenge I faced was implementing dark mode into the web application. Research mode made me understand the various ways of implementing said component, in the end, I settled upon styled-components library due to the presence of Theme Provider and GlobalStyle which made it easier to deploy changes.

I chose to use the create-react-app boilerplate to minimize the initial setup and invest more time in diving into weird technological rabbit holes.
