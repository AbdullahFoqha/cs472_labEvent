const circle = document.querySelector('.circle');
const startButton = document.getElementById('startButton');

startButton.addEventListener('click', () => {
  const width = parseInt(document.getElementById('width').value);
  const growth = parseInt(document.getElementById('growth').value);
  const rate = parseInt(document.getElementById('rate').value);
  const numCircles = parseInt(document.getElementById('numCircles').value);

  for (let i = 0; i < numCircles; i++) {
    createCircle(width, growth, rate);
  }
});

function createCircle(width, growth, rate) {
  const materialDesignColors = [
    '#F44336',
    '#E91E63',
    '#9C27B0',
    '#673AB7',
    '#3F51B5',
    '#2196F3',
    '#03A9F4',
    '#00BCD4',
    '#009688',
    '#4CAF50',
    '#8BC34A',
    '#CDDC39',
    '#FFEB3B',
    '#FFC107',
    '#FF9800',
    '#FF5722',
    '#795548',
    '#9E9E9E',
    '#607D8B',
  ];
  const newCircle = document.createElement('div');
  newCircle.className = 'circle';
  newCircle.style.width = `${width}px`;
  newCircle.style.height = `${width}px`;
  newCircle.style.backgroundColor =
    materialDesignColors[
      Math.floor(Math.random() * materialDesignColors.length)
    ];
  newCircle.style.transition = `width ${rate}ms, height ${rate}ms`;

  document.body.appendChild(newCircle);
  newCircle.style.left = `${Math.random() * (window.innerWidth - width)}px`;
  newCircle.style.top = `${Math.random() * (window.innerHeight - width)}px`;

  const id = setInterval(() => {
    newCircle.style.width = `${
      +newCircle.style.width.substring(0, newCircle.style.width.length - 2) +
      growth
    }px`;
    newCircle.style.height = `${
      +newCircle.style.height.substring(0, newCircle.style.height.length - 2) +
      growth
    }px`;
  }, 500);

  newCircle.addEventListener('click', () => {
    newCircle.remove();
    clearInterval(id);
  });
}
