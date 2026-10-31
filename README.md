# Retro Gaming Console README #

## The API Call ##
To make the API call I first created an event listener that activates when the button is pressed. The fuciton called by this creates a new XMLHttpRequest object, gives it the necessary information, and sends the request out. It also checks the readyState of the response, and if the status code is 200. If the status code is indeed 200, then is runs a for loop that creates and populates the cards, after parsing the JSON. This method also populates the loading message, and the error message if need be.

## How The Summary is Calculated ##
The method that runs on the event listener has one other funciton: calling the function to write the summary. This function (aptly named writeSummary), takes in the parsed console array as a parameter. It declares two varibles, newest and oldest, and sets them equal to the first index in the array. It then runs two for loops that checks each other index to see if it's older or newer than the variable. If it is, then the variable is set to the new index. After these loops, it prints out the length of the array, and the name and year properties of the oldest and newest variables. It also populates the summary header, simply so the header doesn't show when there's no summary.

## Link to the Repository ##
[Repository Link](https://github.com/CMoore-06/RetroGamingConsole)