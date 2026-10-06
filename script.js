document.querySelectorAll('.bg-video').forEach(video => {
  const box = document.querySelector('.' + video.dataset.box);

  box.addEventListener('mouseenter', () => {
    video.classList.add('show');
    video.play();
  });

  box.addEventListener('mouseleave', () => {
    video.classList.remove('show');
    video.pause();
    video.currentTime = 0;
  });
});