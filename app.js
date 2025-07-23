const slider = document.getElementById('transparency-slider');
const label = document.getElementById('transparency-label');

slider.addEventListener('input', () => {
  label.textContent = `PostHog is always ${slider.value}% transparent!`;
});
