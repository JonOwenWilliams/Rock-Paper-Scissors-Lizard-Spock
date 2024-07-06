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

// countdown timer

let countdownTimer = 10;
let timerElement = document.getElementById('timer');
let timer;

function countdown() {
    countdownTimer = 10;
    timerElement.innerText = countdownTimer;

    timer = setInterval(() => {
        countdownTimer--;
        timerElement.innerText = countdownTimer;
        if (countdownTimer === 0) {
            timerElement.innerText = 'Pick Now!';
            clearInterval(timer);
        }
    }, 1000);
}