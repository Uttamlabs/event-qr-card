document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('main-video');
  const startScreen = document.getElementById('start-screen');
  const ctaPopup = document.getElementById('cta-popup');
  const enterBtn = startScreen.querySelector('.enter-btn');

  enterBtn.addEventListener('click', () => {
    startScreen.classList.add('hide');

    video.muted = false;
    video.play().catch((err) => {
      console.warn('Video playback was blocked:', err);
    });
  });

  video.addEventListener('ended', () => {
    ctaPopup.classList.add('visible');
  });
});
