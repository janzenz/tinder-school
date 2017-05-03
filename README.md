# Goodwall
![Goodwall logo](https://www.goodwall.org/dist/images/favicons/mstile-70x70.png "Goodwall")

## Project setup
1. Run `npm install`
2. Run `npm run start`
3. Navigate to http://localhost

## DEMO
Please view this on Chrome on Mobile mode or else the `Tinder`-style swiping won't work. Please also make sure to view it on an **iPhone 6 Plus** view port in Chrome developer tools.

## Development Process
I tried to approach this as a real-world task for a client. You can find each step on my commits since they are mostly descriptive.

Since I'm limited to use the existing libraries, I went ahead and looked at the project structure and the packages installed. I made sure to activate linting with `ESLint` to make sure I conform to the teams' coding-styling. I also added a `.editorconfig` file to configure my IDE editing settings. I also make sure I follow the File Structing of the project, for example separaing the `containers` and `components` to each of their directories and put all the **state-specific** codes under the `stores` directory and expose `components` in a directory using `index.js`.

A bit of overview how I engineered this project; I started with Routing and created the rudimentary pages and eventually added the data-loading. When I was ready to play with the data I planned out the structure of my **Reducers* as you can see in my comments on `src/store/reducers/index.js`. So basically I started with the most difficult tasks to gain confidence with my work and whenever I get stuck I start refactoring some code and do some easier tasks and get back to where I left off from the difficult ones.

## Techniques Applied
So here are noteworthy techniques and optimizations I did for this Project:
- Abused **PropTypes** as much as possible since it really helps a lot. I made sure that I covered all the props for each `components` and `container`.
- **Reselect** I used reselect to memoize the result when selecting Universities.
- I used **Debouncing** and **Throttle** for touch events and button action events to improve performance on the UI.
- I used **Thunks** to retrieve the University data and kept my **Reducers** as *PURE* as possible. You will know it is so since the **time-travel-debugging (TTD)** works well.
- I created a provision for the **Entry Requirements** section instead of just manually coding the page wih static HTML. `src/components/Pages/UniversityProfile.js:48`
- I also linked `react-router-redux` in the configuration to also make the routes available for TTD.
- I updated the package of Material UI.
- I didn't know I could create a Pie Chart without any help from D3.js or any library. LOL!
- Lastly, I originally thought of just supporting swipe for choosing Universities. But I thought it wasn't a good UX since some people might "change" their minds along the way so I added distance checking for the drag. And if it reaches a certain range and the user lets go then the action is committed. Otherwise the University "card" goes back to its original location.

## Limitations
- **Not Responsive** I tried making this responsive but since it wasn't required I focused on working on the functionalities.
- Tinder-style Drag only works on mobile with `Touch` events.
- Works best on Chrome Mobile view with *iPhone 6 Plus*'s dimension.
- No Photos and Logos for the University since I don't have the data for it in the `src/api` directory and was running out of time. But I made provisions for it just in case I get the photos.

## Moreover
If I had more time and more freedom on this project, here are the things I could have improved:
- Although its trivial to implement, I could have applied Mouse Drag and Drop events. But since I was using Chrome's mobile mode I was limited to Touch Events, hence I implemented Touch instead of Mouse Events.
- Use **Flow** or **TypeScript**.
- Add testing using Enzyme, Chai, and Mocha, especially for the Tinder-style University picking.
- Use `react-transition-group` for fine-tuning the animation of the elements.
- We can also remove `react-tap-event-plugin` since it's not necessary on `react@^0.15.0`.
