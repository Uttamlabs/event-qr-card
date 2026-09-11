document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('main-video');
  const startScreen = document.getElementById('start-screen');
  const ctaPopup = document.getElementById('cta-popup');
  const enterBtn = document.querySelector('.enter-btn');

  enterBtn.addEventListener('click', () => {
    startScreen.classList.add('hide');

    video.muted = false;
    video.play().catch((err) => console.log(err));
  });

  video.addEventListener('ended', () => {
    ctaPopup.classList.add('visible');
  });
});
