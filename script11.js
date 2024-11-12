let currentLevel = 0;
let startScreen = document.getElementById("start-screen");
let gameScreen = document.getElementById("game-screen");

const levels = [
    {
        text: "You find yourself in a mysterious forest. You must find a way back home.",
        choices: ["Walk down the forest path", "Climb a tree to look around"],
        consequences: {
            "Walk down the forest path": 1,
            "Climb a tree to look around": 2
        },
        image: "s1.jpg"
    },
    {
        text: "You encounter a wise owl sitting on a branch.",
        choices: ["Talk to the owl", "Ignore and keep walking"],
        consequences: {
            "Talk to the owl": 3,
            "Ignore and keep walking": 4
        },
        image: "s2.jpg"
    },
    {
        text: "You climb the tree and spot a distant clearing.",
        choices: ["Head towards the clearing", "Climb down and explore nearby"],
        consequences: {
            "Head towards the clearing": 5,
            "Climb down and explore nearby": 1
        },
        image: "s3.jpg"
    },
    {
        text: "The owl gives you a riddle that may lead you home.",
        choices: ["Solve the riddle", "Walk away"],
        consequences: {
            "Solve the riddle": 6,
            "Walk away": 4
        },
        image: "s4.jpg"
    },
    {
        text: "You encounter a thick mist that makes it hard to see.",
        choices: ["Walk into the mist", "Turn back"],
        consequences: {
            "Walk into the mist": 7,
            "Turn back": 0
        },
        image: "s5.jpg"
    },
    {
        text: "The clearing has a magical portal that might take you home.",
        choices: ["Enter the portal", "Look for another way"],
        consequences: {
            "Enter the portal": 8,
            "Look for another way": 4
        },
        image: "s6.jpg"
    },
    {
        text: "The riddle’s answer opens a hidden path home.",
        choices: [],
        consequences: {},
        endText: "Congratulations! You solved the riddle and found your way home.",
        image: "s7.jpg"
    },
    {
        text: "The mist envelops you, and you’re lost forever in the forest.",
        choices: [],
        consequences: {},
        endText: "Game Over",
        image: "s8.jpg"
    },
    {
        text: "You enter the portal and magically appear back home.",
        choices: [],
        consequences: {},
        endText: "Congratulations! You found your way home through the portal.",
        image: "s7.jpg"
    }
];

const storyElement = document.getElementById("story");
const choicesElement = document.getElementById("choices");
const imageElement = document.getElementById("level-image");
const endTextElement = document.getElementById("endText");
const startButton = document.getElementById("start-button");

startButton.addEventListener("click", startGame);

function startGame() {
    startScreen.style.display = "none";
    gameScreen.style.display = "block";
    renderLevel(levels[currentLevel]);
}

function renderLevel(level) {
    storyElement.innerText = level.text;
    choicesElement.innerHTML = "";
    imageElement.src = level.image;
    endTextElement.innerText = "";

    if (level.endText) {
        endTextElement.innerText = level.endText;
        if (level.endText === "Game Over") {
            endTextElement.style.color = "red";
        } else {
            endTextElement.style.color = "green";
        }
        endTextElement.innerHTML += '<br><button id="restart-button">Restart Game</button>';
        document.getElementById("restart-button").addEventListener("click", restartGame);
    } else {
        Object.keys(level.consequences).forEach(choice => {
            const button = document.createElement("button");
            button.innerText = choice;
            button.addEventListener("click", () => {
                currentLevel = level.consequences[choice];
                renderLevel(levels[currentLevel]);
            });
            choicesElement.appendChild(button);
        });
    }
}

function restartGame() {
    location.reload();
}

startScreen.style.display = "block";
gameScreen.style.display = "none";
