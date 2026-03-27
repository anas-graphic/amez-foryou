function startExperience() {
    // دەستپێکردنی گۆرانی
    const music = document.getElementById('bgMusic');
    music.play().catch(error => console.log("Music play blocked by browser"));

    // گۆڕینی شاشەکان
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');

    // دروستکردنی دڵە فڕیوەکان بەردەوام
    setInterval(createFallingHeart, 300);
}

function createFallingHeart() {
    const heart = document.createElement('div');
    heart.classList.add('falling-heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.style.opacity = Math.random();
    
    document.getElementById('hearts-container').appendChild(heart);

    // سڕینەوەی دڵەکان دوای ئەوەی کۆتاییان دێت بۆ ئەوەی وێبسایتەکە گران نەبێت
    setTimeout(() => {
        heart.remove();
    }, 5000);
}