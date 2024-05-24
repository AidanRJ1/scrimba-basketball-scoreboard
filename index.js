const scoreboard = document.querySelector(".scoreboard");
let homeScoreEl = scoreboard.querySelector(".home__score");
let homeTitleEl = scoreboard.querySelector(".home__title");
let guestScoreEl = scoreboard.querySelector(".guest__score");
let guestTitleEl = scoreboard.querySelector(".guest__title");

let homeScore = 0;
let guestScore = 0;

function increaseHomeScore(amount) {
    homeScore += amount;
    updateHomeScore();
    checkLeader()
};

function updateHomeScore() {
    homeScoreEl.textContent = homeScore;
}

function increaseGuestScore(amount) {
    guestScore += amount;
    updateGuestScore();
    checkLeader()
}

function updateGuestScore() {
    guestScoreEl.textContent = guestScore;
}

function checkLeader() {
    if(guestScore > homeScore) {
        homeTitleEl.classList.remove("winner");
        guestTitleEl.classList.add("winner");
        return;
    }
    
    if(homeScore > guestScore) {
        guestTitleEl.classList.remove("winner");
        homeTitleEl.classList.add("winner");
        return;
    }
    
    homeTitleEl.classList.remove("winner");
    guestTitleEl.classList.remove("winner");
}

function resetGame() {
    homeScore = 0;
    updateHomeScore();
    guestScore = 0;
    updateGuestScore();
    checkLeader();
}