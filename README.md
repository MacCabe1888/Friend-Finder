# Friend-Finder
A matchmaking site powered by Node.js and Express.

### Visit

You can visit the deployed site at the following URL: https://friendfinder1888.herokuapp.com

### Overview

This app matches the user to another user deemed to be the most compatible friend, as measured by the similarity of the users' respective answers to a set of ten survey questions.

### Technical Approach

* Each potential friend's name, image, and survey answers are stored in a JSON object. Upon completing the survey, the user will be shown the name and image of the most compatible friend, i.e. the friend corresponding to the JSON object whose array of "scores" (each "score" being a numerical representation of the friend's answer to a given question) mathematically differs the least from the array of scores the user has just submitted.
* The server is powered by Node.js and Express. It handles the HTML routes as the user navigates between the home page and the survey as well as the API routes which process the user's input, calculate the user's compatibility with potential friends, and return the result (i.e., the closest match from the JSON array).
