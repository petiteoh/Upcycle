# Upcycled

## Background and Overview

At our core, Upcycled is a social sharing and media service designed to enable and inspire creative reuse of everyday "waste" into something of higher value! On Upcycled, users -- or as we call it Zero Heroes, are rewarded with badges by accumulating Hero Points based on their upcycled projects and engagements. Join our community of Zero Heroes to discover unimaginable upcycled creations shared by the world for the world we love.

## Functionality & MVP

   - [ ] Host app on Heroku
   - [ ] User authorization: sign up and log in
   - [ ] Display a live leaderboard on the Zero Hero with the most Hero Points
   - [ ] Zero Hero profile page showcasing their projects, points, rank and badges
   - [ ] Mini infograph on waste reduction overall by our Zero Hero
   - [ ] Search functionality of posts by category, material and location
   - [ ] Production README


#### Bonus Features
   - [ ] A calculator that Zero Heroes can use to calculate the carbon footprint saved based on their creation
   - [ ] Adding comments below each post

## WireFrames
User Auth Modal
![TBD](TBD)

Interactive Infographic
![TBD](TBD)

Profile Page
![TBD](TBD)

Community Feed
![TBD](TBD)

## Technologies & Technical Challenges

  ### Backend: MongoDB/Express/Node.js
    - MongoDB: Non-relational database with Mongoose as an ODM library.
    - Express: Node.js framework for routing/HTTP requests/responses
  ### Frontend: React/Node.js
    - React/Redux: Frontend component rendering and connection to application state

Technical challenges: 
  - Deciding what the best state shape should be to connect all components from the backend to the frontend
  - Implementing AWS hosting site
  - Routing errors
  - Pushing to Heroku
  - Git workflow

### Backend: MongoDB/Express 
 
Technical challenges: 
  - DB accepting duplicate handles
  - Forgetting to export, add .use in the root file

### Frontend: React/Node.js 

Technical challenges: 
  - Understanding the state to map appropriately information that is needed
  - Getting components to re-render instead of having to refresh to reflect updates
  - Route path duplicating after every click
  - "can't read property of undefined"

## Accomplished over the Weekend

  - All members of the team completed MERN tutorials
  - Wrote proposal Readme and planned work for the week

## Group Members & Work Breakdown

  - **Victor Crispin** -Front-end Developer
  <br>
  - **Cade Schreger** - Back-end developer
  <br>
  - **Artem Silka** - Flex developer
  <br>
  - **Nikki Teoh** - Team Lead
  <br>

## Day-to-Day Breakdown

### August 10
  - Up and running on Heroku - **Nikki**
  - Backend user authentication(login/register) -  **Cade**
  - User model/validations; API endpoints; DB setup and config (MongoDB) -  **Cade**
  - Build posts, categories, materials, locations backend - **Artem**
  - Frontend components set-up - **Victor**
  - Built nav bar and splash page wireframe - **Victor**
  - Build sign up and sign in forms - **Nikki** 
  
### Day 2
  - Frontend user authentication(login/register) - **Nikki**
  - References/embeddings; Start Hero Points/following/upcycle feature -  **Cade**
  - Build posts frontend - **Artem**
  - Splash page content and styling - **Victor**
  - Nav bar styling - **Victor**
  
### Day 3
  - Frontend filtering and search - **Artem**
  - Create additional backend routes for leaderboard, handles, upcycles, categories, hero points/backend debugging; Model edits; Badges functionality; - **Cade**
  - Leaderboard logic and styling - **Victor**
  - Build post form - **Nikki**

### Day 4
  - Upcycled posts feature - **Cade/Nikki**
  - Update posts component with Points, handle, and Upcycle feature - **Cade/Nikki**
  - Profile page styling, badges - **Artem/Victor**
  - Search styling - **Artem**
  - Update all our Wiki pages - **Nikki**
  - AWS hosting site setup - **Nikki**
  - Passport/auth debugging; Upcycle FE; Leaderboard/Top posts BE;  - **Cade**
  
### Day 5
  - Finishing styling touches - **All Members**
  - Debugging and pushing to Heroku - **All Members**
  - Complete Production Readme - **All Members**
