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


Outstanding Tasks:

### Login/signup form
- Needs to render errors
### Logout
- Pop up to show that user has successfully logged out
### State
- Needs to be normalized
### Search bar
- Add in categories
- Debouncing to search as you type
- reorganize the CSS code instead of hardcode
- add background color to hide posts as it scrolls
### Upcycle
- Un-upcycle a post
### URL paths
- Need to fix it from duplication and breaking
### Create post form
- Should be brought back to the page it which the button was clicked
### Upcycle featured post
- Styling
- Consistent with posts page
### Upcycle featured post
- Needs to render the post with the most hero points
### Update Upcycle to Upcycled on the browser tab
### Require image for posts
- Frontend validations and backend validations
### Badge logic
- Badge given according to hero point tiers
### Pencil to edit user profile picture and profile name
### Edit posts
### Delete posts
### Following other users
### Responsiveness
- Make it mobile friendly
### Accessibility
- Make it accessibility friendly
- Add ** for color blind
### Notifications
### Post index
- Infinite scroll
### Update ReadMe
- Wireframes
- State
- Routes
### Push to Heroku
- remove middlewares
- debuggers/console.logs/DS.store/keys/anything on the window

### from IDB
- ARTEM - Auth: don't let user sign up or login with invalid credentials; render the same form with error messages (instead of redirecting to `/posts`)
- ARTEM - Posts / Articles: 1) Render the actual author's name for each post (right now it seems to show that the post was authored by the currently logged in user).
- NIKKI - Posts / Articles: 2) Creating a post: when successful, the form should automatically close and the user should be redirected to the posts page. (Right now nothing happens when I submit the form, so I as the user don't know if my new post went through.) When unsuccessful, you should render error messages to the user. (Right now, I see errors in the console but no indication that I, the user, gave bad input.)
- NIKKI (current) Posts / Articles: 3) Add update and destroy functionality; a logged in user should be able to edit and delete their own posts. (When deleting a post, all the corresponding hero points and upcycles should be destroyed.) 3) Render the actual author's name (right now it seems to show that the post was authored by the currently logged in user).
- NIKKI (current) Posts / Articles: 4) I love the sample projects. I recommend varying the seed data so that there are different posts by multiple different users. You may also want to add more posts so that you can have more robust data for calculating the leaderboard.
- Upcycles: 0) Upcycle button not working
- CADE (current) - Upcycles: 1) Make to update the number of upcycles for a given post as a user clicks the upcycle button (without having to refresh the page).
- CADE (current) - Upcycles: 2) Style the "upcycle/upcycled" button differently depending on whether the logged in user has already upcycled the post. The slight difference in button text isn't a strong enough visual signal to tell the user whether or not they've already voted for something. I think it's fine to re-purpose the hover styling for this (green background w/ black text). If you don't want users to be able to "un-upcycle" a post, you should remove the cursor: pointer from the button when a post is already upcycled by the current user.
- CADE (current) - Upcycles: 3) Should a user be able to upvote their own post? If not, you should disable this button for any posts authored by the currently logged in user.
- CADE (current) - Upcycles: 4) Should getting upcycles on your post increase your hero points? Or are hero points only calculated based on the posts that you create? If upcycles contribute to your hero points, make sure to factor this into the hero point calculation. (Right now I only see hero points that come from posts that I created. If I upcycle one of my posts, that doesn't seem to increment my hero points)
- VIC (current) - Leaderboard: Does this currently include real data (real hero points and real badges), or is it just dummy data? I noticed that whenever I created a new post with my test account, 5 hero points were added to my tally. This did NOT happen with the demo account (which suggests the demo account's hero points are hardcoded). 1) For the leaderboard to be considered functional, it should calculate standings based on actual data with actual users of the app. 2) Bonus: A nice touch would be to add tooltips that explain what each badge is when you hover over one of the badge icons. At the very least, there should be a description somewhere of what each of the badges means. 3) Bonus: clicking on one of the users in the leaderboard would take you to a listing of all their posts or some sort of profile page
ARTEM (current) - Search: From a UX standpoint, I think it would be useful let users search / filter by category
VIC (current) - Splash: 1) replace the placeholder text on the splash page: "StatsStatsStatsStats ImagesImagesImagesImages" 2) I think it's worth including more info about your app somewhere in the "Home" or "About" page. Include a brief description of what your app does, how hero points are calculated, what upcycles are, and the different badges that you can earn on the leaderboard.
- Mandatory additions: For the README, add code snippets and screenshots / gifs of your app in action. For the About page, I'd add a description of the team roles. Update the title to match your new app name (it still says "Upcycle" instead of "Upcycled")
