const animation = [
  { transform: 'rotate(0deg) scale(1)' },
  { transform: 'rotate(180deg) scale(1.5)' },
  { transform: 'rotate(0deg) scale(1)' }
];

const animationConfig = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
};

function animateImage(id) {
  const image = document.getElementById(id);
  const anim = image.animate(animation, animationConfig);
  return anim.finished;
}

animateImage("img1")
  .then(() => animateImage("img2"))
  .then(() => animateImage("img3"))
  .catch((err) => console.error("Animation failed:", err));
