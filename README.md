Example project of a bike rental page. (~2 hours)
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features

* Networking
	- It loads JSON from an external file

* Selection
	- It shows a list of bikes for rental
	- It shows a list of accessories for rental
	- It shows a list of add ons
	- It displays a price total
	- TODO: limit user to only selecting one bicycle
* Submit
	- It allows users to submit a reservation
		- Calls a function that would be a network request
	- It blocks users from submitting a reservation without a bike
		- Shows error message if attempted
		- Resolves error message if bike selected
	- Clears new error messages on submit
* UI
	- It’s responsive

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
