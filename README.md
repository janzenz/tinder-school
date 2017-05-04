# Goodwall
![Goodwall logo](https://www.goodwall.org/dist/images/favicons/mstile-70x70.png "Goodwall")

## Project setup
1. Run `npm install`
2. Run `npm run start`
3. Navigate to `http://localhost:9000`
Note you can change the port in `.env` file.

## DEMO
Since I didn't have time to test it on other environments here are some requirements to be able to run this app without hiccups:
1. Chrome
2. Mobile View with **iPhone 6 Plus** dimension
These are necessary because I added Touch Events for the **Tinder-like** swiping function when choosing Universities.

## Development Process
I tried to approach this as a real-world task for a client. You can find each step on my commits since they are mostly descriptive.

However, here are some bits on how I worked on this project. Since I'm limited to use the existing libraries, I went ahead and looked at the project structure and the packages installed and strategize my solution based on these. I am a subscriber to *Clean Coding* and *Maintable Apps* so I do my best to follow the standards set on a project and by the team. So to do that I saw that this project was using `ESLint` so I just set that up and on top of it I use `.editorconfig` to configure my IDE (VS Code) to conform to the `ESLint` rules. I also make sure I follow the File Structing of the project, for example separaing the `containers` and `components` to each of their directories and put all the **state-specific** codes under the `stores` directory and expose `components` in a directory using `index.js`.

A bit of overview how I engineered this project; I started with Routing and created the rudimentary pages and eventually added the data-loading. When I was ready to play with the data I planned out the structure of my **Reducers* as you can see in my comments on `src/store/reducers/index.js`. So basically I started with the most difficult tasks to gain confidence with the work at hand and whenever I get stuck I start refactoring some code and do some easier tasks and get back to where I left off. This approach has proven to be beneficial for me for a long time and I developed this practice through experience.

## Techniques Applied
So here are noteworthy techniques and optimizations I did for this Project:
1. I abused **PropTypes** as much as possible since it really helps a lot. I made sure that I covered all the props for each `components` and `container`. This helps to know bugs early and fail efficiently.
2. **Reselect** I used reselect to memoize the result when selecting Universities, this proved to be helpful in keeping my code DRY as well.
3. I used **Thunks** to retrieve the University data and grouped dispatches in one of the **Thunks** to keep them DRY and proved to be useful when Accepted/Rejecting Universities via Swipe and Button actions. I also kept my **Reducers** as *PURE* as possible. You will know it is so, since the **time-travel-debugging (TTD)** works pretty well.
4. I also linked `react-router-redux` in the configuration to also make the routes available for TTD.
5. I used **Debouncing** and **Throttle** for touch events and **Thunks** to improve performance on the UI and avoid race conditions.
6. I created a provision for the **Entry Requirements** section instead of just manually coding the page wih static HTML. So in case we need to inject that data in it's easy to apply. `src/components/Pages/UniversityProfile.js:48`

## Improvements
1. I updated the package of Material UI to `0.17.0` because of some props being missing and not support. Shameless plug, I'm also a contributor of this library.
2. I didn't know I could create a Pie Chart without any help from D3.js or any library. LOL!
3. Lastly, I originally thought of just supporting Swipe for choosing Universities. But I thought it wasn't a good UX since some people might "change" their minds along the way so I added distance checking for the drag. And if it reaches a certain range and the user lets go then the action is committed. Otherwise the University "card" goes back to its original location.

## Limitations
1. **Not Responsive** I tried making this responsive but since it wasn't required I focused on working on the functionalities.
2. Tinder-style Drag only works on mobile with `Touch` events.
3. Works best on Chrome Mobile view with *iPhone 6 Plus*'s dimension.
4. No Photos and Logos for the University since I don't have the data for it in the `src/api` directory and was running out of time. But I made provisions for it just in case I get the photos.

## Moreover
If I had more time and more freedom on this project, here are the things I could have improved, not in order:
1. Although its trivial to implement, I could have applied Mouse Drag and Drop events. But since I was using Chrome's mobile mode I was limited to Touch Events, hence I implemented Touch instead of Mouse Events.<br />
2. Use **Flow** or **TypeScript**. Not necessary but will help in the long run.
3. Add testing using Enzyme, Chai, and Mocha, especially for the Tinder-style University picking.<br />
4. Use `react-transition-group` for fine-tuning the animation of the elements.
5. We can also remove `react-tap-event-plugin` since it's not necessary on `react@^0.15.0`.<br />
6. Build and deploy the project.<br />
7. Last be definitely not the list. Go over the *TODO* items I commented out for things that I think can be improved on.<br />

For questions and clarifications, I would be happy to discuss these in detail.
Email: janzen.zarzoso@gmail.com
Skype: janzen.zarzoso
