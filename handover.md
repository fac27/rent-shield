## 👋 Introduction 
![](https://hackmd.io/_uploads/B1PlunUq2.gif)

* What are you building?
     * we are building a renting property search app 
* Why are you building it?
     * Renters need a better experience finding properties to rent where the data is accurate and not overwhelming

## 📙 Project scope 
* What are you not building?
    * We are not building an app that is a property relavance system, property comparisons, or an app that uses crime data.
* How did you decide what features were important?
    * We conducted several workshops with the product owner to narrow down user pain points, understand threats and opportunities in the market and get insights into user personas. We also conducted user research and user testing. 
    * We re-prioritised as we built to ensure we stuck to our user stories while also building a product that was scalable and could be handed over to our product owner at the end of the project. 
## 👉 Project plan 
* How are you going to structure your sprints?
    * sprints will be 1 week long and 2 standups in the morning and after lunch. We will be using Miro for overview of the product map and github project board for tracking our velocity. 
* What order are you going to build in?
    * We are going to start with our landing page and build our components then begin to tackle user specific pages and end with authentication to secure routing for individual users. 
* How did user research inform your plan?
    * user research enabled us to understand what was most important to users in terms of their basic expectations for a property search App. It also helped challenge our assumptions about what we thought people wanted. 
## 💽 Requirement analysis 
* How will you ensure your project is accessible to as many users as possible
    * instagram interface similarities which make it familiar to users.
    * We implemented semantic HTML and used aria labels were possible and tested tabbing through the site 
* Are there any legal or regulatory requirements you should consider?
    * right to privacy - GDPR
    * rating systems for landlords was scrapped 
    * laws in relation to advertising properties (judy has more here)
## Project learnings 
* Did your team work effectively?  
    * We should have broken down tickets more and merged changes more frequently
* What would you do differently next time?
    * we should have addressed login & database first 
    * we still question whether we should have built database first or user journey first
    * More effective retros

## ✂️ Research and findings 
- What did you find out from user testing?
    - Users don't want to hear about crime rates when they search for a new home 
    - Users want to have input on the outcome of the page early on
    - people want bigger images and bigger text


## 🫡 Project outcomes 
- Were your assumptions right or wrong?
    - Assumptions around the kind of information renters want to find were wrong
    - Assumptions around the major pain points for renters during house search were right
- Recommendations and conclusions 
    - 
- What features would you prioritise to build next?
    - authentication & context provider
    - Home screen to be a map and being able to search map-first
    - comparison feature for desktop view
- Was the project a success?
too early to say as it's not necessarily production ready but it's definitely a good proof of concept
- Software Development Lifecycle stages 


## 🗺️ Planning 
* What roles did your team take on?
    * 🦙 Cameo - Scrum Facilitator
        * responsible for project board, liaising with the product owner and removing blockers for the team
    * 🦛 Alphonso - QA & Testing
        * insist on clean legible code
        * ensure that the app has appropriate test coverage
        * know when & to set up mock test where appropriate
    * 🦛 Mark - UX & Design
        * advocate for the user
        * create a style guide
        * Ensure regular attention is given to thorough documentation
        * Ensure completion of handover documentation for the Product Owner
    * 🐃 Tom - DevOps
        * file structure / next boilerplate
        * lint + prettier + husky
        * vercel deploy
        * supabase project setup

| 🍋 Tech Stack 🍉|
|--------|
|Typescript|
|Supabase|
|Tailwind + flowbite|
|Next.js (13)|
|Cypress|
|Huskey|

- [x] Explain the roles and responsibilities of all people working within the software development lifecycle, and how they relate to the project (K2)
- [ ] Did these roles help your team work effectively?
- [ ] Outline how teams work effectively to produce software and how to contribute appropriately (K6) 
- [ ] Compare and contrast the requirements of a software development team, and how they would ensure that each member (including themselves) were able to make a contribution (K6)
## Analysis 
- What might be the intended and unintended consequences of building this product?
## 🎭 Design 
- How did you plan a user experience?
    - we relied on Figma to create our wireframes for how the product would look and how users would navigate through the app. We also used Miro to help us plan out what routes we needed as well as to create a component map
- What technical decisions did you make?
    - We decided to stick with Next13, Supabase, and React so that the product could be handed over easily to the product owner at the end of the project. 
    - There were data that we decided to include and exclude from the database for example adding in latitude and longtitude for properties were added in later on so that we could reduce the need to make calls to google maps API. 
- Server-render vs client-render vs both
    - Most pages are served client-side for reactivity but where possible we served server-side
- Relational or non-relational or no DB
    - We chose a relational database (postgres in Supabase) as the mostly predictable nature of the data fitted a relational model very well. We did allow for future customisation (specifically, users may want to add custom property attributes in future). To enable this we decided to make limited use of json column types.
- Self-hosted or platform-as-a-service
     - We used Paas Supabase for Auth, DB, bucket storage.
- Frontend first vs DB first
    - We did frontend first which helped break user stories into more granular tickets.

# Technical Specification
### Supabase: 
- supabase is where we've stored out database. We've added Judy to the team and she will be able to access the project and be the owner.
- how to find env variables on supabase: 
- authentication happens via supabase and is only set up for email addresses at the moment with no third party providers
- types are exported for typescript from supabase for the database and therefore there are two type files
### Vercel: 
- the site is deployed here: https://rent-shield.vercel.app/
- We've added Judy to the team and she will be able to access the project and be the owner.

### CICD
- prettier & lint are ran on pre-commit using husky. You'll find details in the lint-staged file and the husky file. 
- cypress tests are ran via github actions on push from PR

### env variables
- there is a .env example file in the repo with example env variables

### Google Maps API
- the product owner will need to set up their own google maps dev account to get new google Maps API credentials. The documentation for that is here: https://developers.google.com/maps
- May need ££ if after a number of requests

### Design & CSS
- we predominantly used a component library called flowbite and tailwind. We didn't use many global styles except for some buttons which are outlined in the globals.css file


*Review methods of software design with reference to functional/technical specifications and apply a justified approach to software development (K11, S11, S12)*
## Implementation/Build 
- How did you ensure your code was good?
    - We ensured that two people reviewed every PR
    - We installed and used Husky so that formatters/linters were used with every commit and that tests were run on every push.
    - We also made it a rule that with large PRs and features that at least one test was written
    - We made time to 'show and tell' our code during check-ins and stand ups and forced ourselves to talk through our code
- Create logical and maintainable code to deliver project outcomes, explaining their choice of approach. (S1)
- What interesting technical problems did you have to solve?
    - Using the Google Maps API for autocomplete location and using the markers library to mark the properties on the map
- Outline and apply the rationale and use of algorithms, logic and data structures. (K9, S16)
- How did you debug issues that arose?
    - We took time to pair on complex features
    - We did a lot of rubber ducking and in-depth code reviews
- Apply structured techniques to problem solving to identify and resolve issues and debug basic flaws in code (S7)
## Test 
- How did you verify your project worked correctly?
    - Cypress is installed as a dev-dependency and every developer is responsible for unit testing their own work. Tests for user stories are also updated as we progress and the entire test suite must pass before any new code is pushed into the repository.
- Identify and create test scenarios which satisfy the project specification (S6)
    - E2E testing checks for the following user stories:
        - As a user I want to search properties by location, budget, number of bedrooms, and property type
        - As a renter I want to login so that I can save/favourite properties
        - As a landlord I want to be able to login and upload my property so that renters can see it
- Did writing automated tests catch any bugs?
    - No 
- Analyse unit testing results and review the outcomes, correcting errors. (S4)
## Deploy 
- Where/how did you deploy your application?
    - The page is deployed on Vercel
    - The main branch of the repository is continuously deployed and only working and tested features are added into the deployed product at any point. We did not employ a 'dev branch' approach and relied on strenuous testing & code reviews
- Review and justify their contribution to building, managing and deploying code into the relevant environment in accordance with the project specification (S10)

- What problems did you encounter during deployment?
    - No problems have yet occured during deployment.

## Maintain 
- Is it easy for someone make changes to the codebase?
    - yes
- Could a new person quickly be onboarded to contribute?
    - yes, as the product is an MVP there are limited routes
- Establishes a logical thinking approach to areas of work which require valid reasoning and/or justified decision making (B2)
- Describes how they have maintained a productive, professional and secure working environment throughout the project activity (B3)
