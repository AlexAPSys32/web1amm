document.addEventListener('DOMContentLoaded', () => {
  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
  let index = 0;
  document.querySelector('.icon-alumno1').addEventListener('mousemove', () => {
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
  });
});
