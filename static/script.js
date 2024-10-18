let score = 0;
let moodengImage = document.getElementById('moodeng');
let popSound = document.getElementById('pop-sound');

function popDeng() {
    moodengImage.src = 'static/images/deng_open.jpg';
    popSound.play();
    score += 1;
    document.getElementById('score').innerText = score;
    setTimeout(() => {
        moodengImage.src = 'static/images/deng_closed.jpg';
    }, 200);
}
