document.addEventListener("DOMContentLoaded", function() {
    
    // changing icon under header

    // different icons
    const rpsIcons = [
        "fa-regular fa-hand-rock",
        "fa-regular fa-hand",
        "fa-regular fa-hand-scissors",
        "fa-regular fa-hand-lizard",
        "fa-regular fa-hand-spock"
    ];
    // colors for the changing icon
    const iconColors = [
        '#f40234', 
        '#f0882f',
        '#ffe600',
        '#63a000',
        '#0059a1'
    ]

    let currentIndex = 0;

    // function to change icons and colors

    function changeIcons() {
        let icons = document.getElementById("changing-icon");
        icons.className = rpsIcons[currentIndex];
        icons.style.color = iconColors[currentIndex];
        currentIndex = (currentIndex + 1) % rpsIcons.length;
    }

    setInterval(changeIcons, 1500);
});

// score area

let randomizerScore = 0
let playersScore = 0
let draw = 0

//  playable Choices

const gameChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const gameIcons = {
    rock:'<i class="fa-regular fa-hand-rock"></i>',
    paper:'<i class="fa-regular fa-hand"></i>',
    scissors:'<i class="fa-regular fa-hand-scissors"></i>',
    lizard:'<i class="fa-regular fa-hand-lizard"></i>',
    spock:'<i class="fa-regular fa-hand-spock"></i>'
};

const result = document.getElementById('result');
const playersChoice = document.getElementById ('displayPlayerChoice');
const randomChoice = document.getElementById ('displayRandomChoice');
const wins = document.getElementById ('wins')
const losses = document.getElementById ('losses')
const draws = document.getElementById ('draws')

// randomizer to act as computers choice

function randomizedChoice() {
    const randomizer = Math.floor(Math.random() * gameChoices.length);
    return gameChoices[randomizer];
}

// playable buttons 

function play(userChoice) {
    const computerChoice = randomizedChoice();
    const choicesMade = getResults (userChoice, computerChoice);

    playersChoice.innerText = `You chose = ${gameIcons[gameChoices]}`;
    randomChoice.innerText = `Computer chose = ${gameIcons[gameChoices]}`;

    if (choicesMade === 'win') {
        playersScore++;
        result.innerText = 'You Win!';
    } else if (choicesMade === 'lose') {
        randomizerScore++;
        result.innerText = 'You Lose! Goodluck next time!';
    } else {
        draw++;
        result.innerText = "It's a Draw!";
    }
    updateScore()
}

//updating the score display

function updateScore() {
    wins.innerText = playersScore;
    losses.innerText = randomizerScore;
    draws.innerText = draw;
}

// what wins and what looses

function getResults(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'draw';
    }
    switch (userChoice) {
        case 'rock':
            return (computerChoice === 'scissors' || computerChoice === 'lizard') ? 'win' : 'lose';
        case 'paper':
               return (computerChoice === 'rock' || computerChoice === 'spock') ? 'win' : 'lose';
        case 'scissors':
            return (computerChoice === 'paper' || computerChoice === 'lizard') ? 'win' : 'lose';
        case 'lizard':
            return (computerChoice === 'spock' || computerChoice === 'paper') ? 'win' : 'lose';
        case 'spock':
            return (computerChoice === 'scissors' || computerChoice === 'rock') ? 'win' : 'lose';
    }
}