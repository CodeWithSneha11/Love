document.addEventListener("DOMContentLoaded", function() {
    // Surprise Message Button
    document.getElementById("wishButton")?.addEventListener("click", () => {
        const messages = [
            "You are unstoppable! 🚀",
            "You’re a future officer! 👮‍♂️",
            "You will pass with flying colors! 🌟"
        ];
        document.getElementById("message").innerText = messages[Math.floor(Math.random() * messages.length)];
    });

    // Motivational Quotes
    document.getElementById("quoteButton")?.addEventListener("click", () => {
        const quotes = [
            "Believe in yourself, Vijay! 💖",
            "Push harder than yesterday! 💪",
            "You are made for greatness! 🚀"
        ];
        document.getElementById("quote").innerText = quotes[Math.floor(Math.random() * quotes.length)];
    });

    // Countdown Timer
    const examDate = new Date("2025-02-24").getTime();
    setInterval(() => {
        const now = new Date().getTime();
        const diff = examDate - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        document.getElementById("countdown").innerText = `${days} days left!`;
    }, 1000);
});
document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("backgroundMusic");
    const playButton = document.getElementById("musicButton");

    playButton.addEventListener("click", function () {
        if (music.paused) {
            music.volume = 0.5; // Adjust volume (0.0 - 1.0)
            music.play().catch(error => console.log("Playback error:", error));
            playButton.innerText = "🔇 Stop Music";
        } else {
            music.pause();
            playButton.innerText = "🎵 Play Music";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const quizData = [
        { 
            question: "What is my favorite food? ❤️", 
            options: ["You", "Pizza", "Burgere", "Pasta"], 
            correct: 0 
        },
        { 
            question: "What’s my favorite thing about you? 😍", 
            options: ["Your smile", "Your voice", "Your kindness", "All of the above"], 
            correct: 3 
        },
        { 
            question: "Which nickname do I love calling you? 🥰", 
            options: ["Cutie", "My Handsome", "Chikuu", "Pumpkin"], 
            correct: 1 
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const feedbackElement = document.getElementById("feedback");
    const progressBar = document.getElementById("progress");
    const nextButton = document.getElementById("nextButton");
    const finalMessage = document.getElementById("finalMessage");
    const surpriseButton = document.getElementById("surpriseButton");

    function loadQuestion() {
        if (currentQuestionIndex >= quizData.length) {
            document.getElementById("quiz-container").style.display = "none";
            finalMessage.classList.remove("hidden");
            return;
        }

        let qData = quizData[currentQuestionIndex];
        questionElement.innerText = qData.question;
        optionsElement.innerHTML = "";

        qData.options.forEach((option, index) => {
            let button = document.createElement("button");
            button.innerText = option;
            button.classList.add("option-button");
            button.onclick = () => checkAnswer(index);
            optionsElement.appendChild(button);
        });
    }

    function checkAnswer(index) {
        let correctIndex = quizData[currentQuestionIndex].correct;
        if (index === correctIndex) {
            feedbackElement.innerHTML = "💖 Correct! You know me so well! 💕";
            score++;
            animateHearts();
            startConfetti();
            updateLoveMeter();
        } else {
            feedbackElement.innerHTML = "😢 Oops! Try again, love!";
        }
    }

    function updateLoveMeter() {
        let progressPercent = (score / quizData.length) * 100;
        progressBar.style.width = progressPercent + "%";
    }

    nextButton.addEventListener("click", () => {
        currentQuestionIndex++;
        loadQuestion();
        feedbackElement.innerHTML = "";
    });

    surpriseButton.addEventListener("click", () => {
        alert("🎉 Surprise! You are my one and only! 💖");
    });

    loadQuestion();
});

// Floating Heart Animation
function animateHearts() {
    for (let i = 0; i < 10; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

// Confetti Effect
function startConfetti() {
    const confettiCanvas = document.getElementById("confettiCanvas");
    if (!confettiCanvas) return;

    const confettiCtx = confettiCanvas.getContext("2d");
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;

    let particles = [];
    
    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * confettiCanvas.width,
            y: Math.random() * confettiCanvas.height,
            r: Math.random() * 10 + 2,
            d: Math.random() * 100,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`
        });
    }

    function drawConfetti() {
        confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        particles.forEach(p => {
            confettiCtx.beginPath();
            confettiCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2, false);
            confettiCtx.fillStyle = p.color;
            confettiCtx.fill();
        });
        requestAnimationFrame(drawConfetti);
    }

    drawConfetti();
}
document.addEventListener("DOMContentLoaded", function () {
    const spinButton = document.getElementById("spinButton");
    const dateWheel = document.getElementById("dateWheel");
    const dateResult = document.getElementById("dateResult");

    if (spinButton) {
        spinButton.addEventListener("click", () => {
            let randomRotation = Math.floor(3600 + Math.random() * 360); // Ensure multiple full spins
            dateWheel.style.transform = `rotate(${randomRotation}deg)`;

            setTimeout(() => {
                const sections = [
                    "Movie Night 🎥",
                    "Beach Walk 🌊",
                    "Candlelight Dinner 🍽️",
                    "Ice Cream Date 🍦",
                    "Gaming Night 🎮",
                    "Long Drive 🚗💨",
                    "Stargazing ✨",
                    "Coffee Date ☕"
                ];
                let index = Math.floor((randomRotation % 360) / 45);
                dateResult.innerText = `💖 Let's go for: ${sections[index]}! 😍`;
            }, 4000); // Wait for spin animation
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Floating Hearts Animation
    setInterval(() => {
        let heart = document.createElement("div");
        heart.innerText = "❤️";
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.getElementById("hearts-container").appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 500);

    // Virtual Hug Button
    document.getElementById("hugButton").addEventListener("click", () => {
        alert("🤗 Sending you the biggest virtual hug, Vijay! 💖");
    });

    // Virtual Kiss Button
    document.getElementById("kissButton").addEventListener("click", () => {
        let kiss = document.createElement("div");
        kiss.innerText = "💋";
        kiss.classList.add("heart");
        kiss.style.left = Math.random() * 100 + "vw";
        kiss.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.getElementById("hearts-container").appendChild(kiss);

        setTimeout(() => {
            kiss.remove();
        }, 5000);
    });

    // Background Music
    document.getElementById("musicButton").addEventListener("click", () => {
        let music = document.getElementById("backgroundMusic");
        if (music.paused) {
            music.play();
        } else {
            music.pause();
        }
    });

    // Fireworks
    let canvas = document.getElementById("fireworksCanvas");
    let ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function fireworks() {
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                ctx.beginPath();
                ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 10, 0, Math.PI * 2);
                ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
                ctx.fill();
            }, i * 100);
        }
    }

    
});

