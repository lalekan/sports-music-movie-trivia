const questionList = [
    {category: "music", question: "What singer has had a Billboard No. 1 hit in each of the last four decades?", answer: 'Mariah Carey', points: 10}, 
    {category: "music", question: "What was Freddie Mercury's real name?", answer: "farrokh Bulsara", points: 10},
    {category: "music", question: "Who founded Motown Records?", answer: "Berry Gordy", points: 10},
    {category: "music", question: "What was Elvis Presley's first No. 1 hit in the United States?", answer: "Heartbreak Hotel", points: 10},
    {category: "music", question: "Who was the first woman to have four country albums reach No. 1 on the Billboard 200?", answer: "Carrie Underwood", points: 10},
    {category: "music", question: "Who produced Michael Jackson's Bad?", answer: "Quincy Jones", points: 10},
    {category: "music", question: "Jay-Z says he got his MBA from where?", answer: "Marcy Projects", points: 10},
    {category: "music", question: "What state was Tupac Shakur born?", answer: "New York", points: 10}, 
    {category: "music", question: "what city is often referred to as the birthplace of jazz?", answer: "New Orleans", points: 10},
    {category: "music", question: "Who won the first season of American Idol?", answer: "Kelly Clarkson", points: 10},
    {category: "movies", question: "Who won the Academy Award for Best Actor for his role in the film There Will Be Blood?", answer: "Daniel Day-Lewis", points: 10},
    {category: "movies", question: "In the movie The Matrix, what is Neo's real name?", answer: "Thomas Anderson", points: 10},
    {category: "movies", question: "Who directed the 2017 film Get Out?", answer: "Jordan Peele", points: 10},
    {category: "movies", question: "Who directed the 1994 film Pulp Fiction?", answer: "Quentin Tarantino", points: 10},
    {category: "movies", question: "In Inception, how many dream levels does the crew enter?", answer: "Five", points: 10},
    {category: "movies", question: "What was the first movie to feature a toilet flushing?", answer: "Psycho", points: 10},
    {category: "movies", question: "Who starred as Arnold Schwarzenegger's twin in the 1988 movie Twins?", answer: "Danny DeVito", points: 10},
    {category: "movies", question: "Including the 2018 film, how many versions of A Star Is Born are there?", answer: "four", points: 10},
    {category: "movies", question: "What state does The Help take place?", answer: "Mississippi", points: 10},
    {category: "movies", question: "Which mixed martial arts legend appeared in Furious 7?", answer: "Ronda Rousey", points: 10},
    {category: "sports", question: "Which team is known as the gunners", answer: "Arsenal", points: 10},
    {category: "sports", question: "What is Canada’s national sport?", answer: "Ice Hockey"},
    {category: "sports", question: "Which MLB player was nicknamed “The Bambino”? ", answer: "Babe Ruth", points: 10},
    {category: "sports", question: "Who holds the world record for the fastest time in the 100m dash? ", answer: "Usain Bolt", points: 10},
    {category: "sports", question: "Who is the all-time leading scorer in NBA history?", answer: "LeBron James", points: 10},
    {category: "sports", question: "Which Olympic athlete has won the most medals?", answer: "Michael Phelps", points: 10},
    {category: "sports", question: "Who has won the most Grand Slam titles in tennis history?", answer: "Serena Williams", points: 10},
    {category: "sports", question: "Who won the first two FIFA Women’s World Player of the Year Awards?", answer: "Mia Hamm", points: 10},
    {category: "sports", question: "Who is the only soccer player in history to win five FIFA Ballons d’Or?", answer: "Lionel Messi", points: 10},
    {category: "sports", question: "What sport is played at Wimbledon?", answer: "Tennis", points: 10},]

document.addEventListener('DOMContentLoaded', () => {
    let selectedCategory = ''
    let currentQuestionIndex = 0
    let score1 = 0
    let score2 = 0
    let filteredQuestion = []
    let currentPlayer = 1
    let isOnePlayer = false
    // Player count
    const onePlayer = document.querySelector('#onePlayer')
    const twoPlayers = document.querySelector('#twoPlayers')

    //Player Name variables
    let playerName1 = document.getElementById('player1')
    let playerName2 = document.getElementById('player2')

    // Player names
    let firstPlayerName = '' 
    let secondPlayerName = ''

    //Category
    const chooseCat = document.querySelectorAll("#chooseCat button")

    //Questions
    const displayQ = document.getElementById('displayQ')
    const answerInput = document.getElementById('answer')
    const submitButton = document.getElementById('submitClick')

    //Scoring
    const display1 = document.getElementById('display1')
    const display2 = document.getElementById('display2')
    const messages = document.querySelector('#messages')


    //Start Game
    const startGameButton = document.querySelector('#startGame')



    //Function to shuffle the questionsList.category at random
    const random = (array) => {
        for(let i = 0; i > 0; i++) {
            const j = Math.floor(Math.random() * (i+1))
            [array[i], array[j]] = [array[j], array[i]]
        }
    }



    //function to display next questions
    const displayQuestion = () => {
        if (currentQuestionIndex < filteredQuestion.length) {
            const q = filteredQuestion[currentQuestionIndex]
            // console.log(q, 'QQQQQQQ')
            displayQ.textContent = q.question
            answerInput.value = ''
        } else {
            endGame()
            // console.log('This game should end')
        }
    }

    const handleAnswer = () => {
        const currentQ = filteredQuestion[currentQuestionIndex]
        const answer = answerInput.value.trim()
        if (answer === currentQ.answer) {
            if(currentPlayer === 1) {
                score1 += currentQ.points
            } else if (!isOnePlayer) {
                score2 += currentQ.points
            }
            messages.textContent = `Correct!!! ${currentQ.answer} is the right answer`
        } else {
            messages.textContent = `Wrong!!!! ${currentQ.answer} is the right answer`
        }
        //Update the score board
        display1.textContent = `${firstPlayerName} Score: ${score1}`
        if (!isOnePlayer) {
            display2.textContent = `${secondPlayerName} Score: ${score2}`
        }

        //Go to next question
        currentQuestionIndex++
        if (isOnePlayer) {
            messages.textContent = `It's ${firstPlayerName}'s turn`
        }  else {
            currentPlayer = currentPlayer === 1 ? 2 : 1
            let playerCond = currentPlayer === 1 ? firstPlayerName : secondPlayerName
            messages.textContent = `It's ${playerCond}'s turn`
        }
        displayQuestion()
    }

    const endGame = () => {
        displayQ.textContent = 'Game over! Final Scores:'
        messages.textContent = `${firstPlayerName} Scored: ${score1}${
            !isOnePlayer ? ', ' + secondPlayerName + ' Scored :' + score2 : ''
        }`
        answerInput.style.display = 'none'
        submitButton.style.display = 'none'
    }

    const startGame = () => {
        if (selectedCategory) {
            filteredQuestion = questionList.filter(questions => questions.category === selectedCategory)
            random(filteredQuestion)
            console.log(filteredQuestion, " filtered")
            currentQuestionIndex = 0
            score1 = 0
            score2 = 0
            currentPlayer = 1
            display1.textContent = `${firstPlayerName} Score: 0`
            display2.textContent = isOnePlayer
            ? 'Score: N/A' 
            : `${secondPlayerName} Score: 0`
            messages.textContent = isOnePlayer
            ? `${firstPlayerName}'s turn`
            : `It's ${firstPlayerName}'s turn`
            displayQuestion() 
        } else {
            alert("Please select a category")
        }
    }

    //Event listeners
    chooseCat.forEach((button) => {
        button.addEventListener('click', ()=> {
            console.log(button, "firstLevel Button")
            chooseCat.forEach((btn) => {
                btn.classList.remove("selected")
            })
            button.classList.add("selected")
            selectedCategory = button.id
            console.log(selectedCategory, " CATTTTTTTTT")
        })
    })

    onePlayer.addEventListener('click', () => {
        playerName2.disabled = true
        isOnePlayer = true
        display2.style.display = "none"
        playerName2 = 'Computer'
    })

    twoPlayers.addEventListener('click', () => {
        playerName2.disabled = false
        isOnePlayer = false
        display2.style.display = "block"
    })

    playerName1.addEventListener('input', () => {
        firstPlayerName = playerName1.value
        // console.log(firstPlayerName + " I'm Firssst")
        return firstPlayerName
    })

    playerName2.addEventListener('input', () => {
        secondPlayerName = playerName2.value
        return secondPlayerName  
    })

    startGameButton.addEventListener('click', () => {
        // firstPlayerName = playerName1.value.trim() || 'Player 1'
        // secondPlayerName = playerName2.value.trim() || 'Player 2'
        if(!isOnePlayer){
            secondPlayerName = playerName2.value.trim()|| "Player 2"
        } else {
            firstPlayerName = playerName1.value.trim()|| "Player 1"
        }
        startGame()
    })

    submitButton.addEventListener('click', handleAnswer)
})