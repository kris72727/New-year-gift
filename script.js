function nextScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    if(id !== 'video-reel') document.getElementById('myReel').pause();
}

function startFireworks() {
    var duration = 2 * 1000;
    var end = Date.now() + duration;
    (function frame() {
        confetti({ particleCount: 7, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#8B0000', '#D4AF37'] });
        confetti({ particleCount: 7, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#8B0000', '#D4AF37'] });
        if (Date.now() < end) requestAnimationFrame(frame);
    }());
    setTimeout(() => nextScreen('video-reel'), 1500);
}

function showPhotos() {
    nextScreen('memories');
    // Red and Gold Confetti Blast
    confetti({ particleCount: 200, spread: 90, origin: { y: 0.6 }, colors: ['#8B0000', '#D4AF37', '#ffffff'] });

    const canvas = document.getElementById('photo-canvas');
    canvas.innerHTML = ''; 

    for (let i = 1; i <= 50; i++) {
        const img = document.createElement('div');
        img.className = 'scatter-photo';
        img.innerHTML = `<img src="img${i}.jpg">`;
        img.style.left = "50%";
        img.style.top = "50%";
        canvas.appendChild(img);

        setTimeout(() => {
            // Randomly scatter across the screen
            const randomX = Math.random() * 85 + 5; 
            const randomY = Math.random() * 75 + 5; 
            const randomRot = Math.random() * 60 - 30;
            img.style.left = `${randomX}%`;
            img.style.top = `${randomY}%`;
            img.style.transform = `translate(-50%, -50%) rotate(${randomRot}deg)`;
            img.style.opacity = "1";
        }, i * 50); // Fast scatter
    }
}

function finalCelebration() {
    confetti({ particleCount: 600, spread: 180, origin: { y: 0.6 }, colors: ['#8B0000', '#D4AF37'] });
}
