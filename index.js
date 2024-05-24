const scoreboard = document.querySelector(".scoreboard");
let homeScoreEl = scoreboard.querySelector(".home__score");
let homeTitleEl = scoreboard.querySelector(".home__title");
let awayScoreEl = scoreboard.querySelector(".away__score");
let awayTitleEl = scoreboard.querySelector(".away__title");

let homeScore = 0;
let awayScore = 0;

function increaseHomeScore(amount) {
    homeScore += amount;
    updateHomeScore();
    checkLeader()
};

function updateHomeScore() {
    homeScoreEl.textContent = homeScore;
}

function increaseawayScore(amount) {
    awayScore += amount;
    updateawayScore();
    checkLeader()
}

function updateawayScore() {
    awayScoreEl.textContent = awayScore;
}

function checkLeader() {
    if(awayScore > homeScore) {
        homeTitleEl.classList.remove("winner");
        awayTitleEl.classList.add("winner");
        return;
    }
    
    if(homeScore > awayScore) {
        awayTitleEl.classList.remove("winner");
        homeTitleEl.classList.add("winner");
        return;
    }
    
    homeTitleEl.classList.remove("winner");
    awayTitleEl.classList.remove("winner");
}

function resetGame() {
    homeScore = 0;
    updateHomeScore();
    awayScore = 0;
    updateawayScore();
    checkLeader();
}