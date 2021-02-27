const progressBar = document.getElementsByClassName('progress-bar')[0]

setInterval(() => {
  const computerdStyles = getComputedStyle(progressBar);
  const width = parseFloat(computerdStyles.getPropertyValue('--width')) || 0
  progressBar.style.setProperty('--width', width + .1)
}, 5)
