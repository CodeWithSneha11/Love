const confettiCanvas = document.getElementById("confettiCanvas");
const confettiCtx = confettiCanvas.getContext("2d");

confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

function createConfetti() {
    let confetti = [];
    for (let i = 0; i < 100; i++) {
        confetti.push({
            x: Math.random() * confettiCanvas.width,
            y: Math.random() * confettiCanvas.height,
            r: Math.random() * 5 + 2,
            d: Math.random() * 2 + 1,
            color: `hsl(${Math.random() * 360}, 100%, 70%)`
        });
    }
    return confetti;
}

let confettiParticles = createConfetti();

function drawConfetti() {
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    confettiParticles.forEach(p => {
        confettiCtx.beginPath();
        confettiCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2, false);
        confettiCtx.fillStyle = p.color;
        confettiCtx.fill();
    });
}

function updateConfetti() {
    confettiParticles.forEach(p => {
        p.y += p.d;
        if (p.y > confettiCanvas.height) {
            p.y = 0;
            p.x = Math.random() * confettiCanvas.width;
        }
    });
}

function animateConfetti() {
    drawConfetti();
    updateConfetti();
    requestAnimationFrame(animateConfetti);
}

animateConfetti();
