# sports-music-movie-trivia


Theme: Sport/Music/Movies Trivia
User Stories
-	As a user, I want to see a landing page that says welcome to Lekan’s trivia quiz
-	As a user, I want the page to ask me to choose one or two players
-	As a user, I want to click on one of these three categories: sports, movies, or music
-	As a user, I want the questions displayed on the screen and a submission box
-	As a user, I want a voice to tell me I’m correct or wrong after submitting answers
-	As a user, I want to see my score displayed out of a total score
-	As a user, I want a pass fail for one player or win, tie, or lose for two players
-	As a user, I want to know when I have won the game
-	As a user, I want the option to quit and restart
Pseudocode
-	Define variable used to track the state of the game
o	Players should be able to enter their names
o	Choose 1 or 2 players
o	Players should be able to choose quiz categories
o	Match result: win, lose, and tie
o	Option for a bonus round if tie
o	Audio: Read out the questions and options
	If answer is correct, audio should say correct and clap
o	Once the game is over the name of the winner needs to be displayed as the winner
o	Total score from each player needs to be displayed beside their names
-	Define Required constant
o	Sports, music, and movies will be the categories of the trivia/quiz
o	Create a constant that creates an array of object, and each object will have a key value. 
	Example. 
•	const questionList = [{Category: “music” Question 1: “Who are you?”, Answer: “No one”}, ….]
o	Reference to DOM displaying messages about starting the game, who the winner is, and whether the game will require a bonus round
-	We need to be able to handle players clicking buttons
