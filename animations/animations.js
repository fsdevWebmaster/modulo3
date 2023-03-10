const artifact = document.querySelector("#artifact");
let position = { x: 0, y: 0 };
let gap = 10;
const interval = setInterval(() => {
  position = { ...position, x: position.x + gap };
  position = { ...position, y: position.y + gap }; 

  console.log("x:", position.x);
  console.log("y:", position.y);

  artifact.style.left = `${position.x}px`;
  artifact.style.top = `${position.y}px`;
  
  if (position.x > 100) {
    clearInterval(interval);
  }
}, 800);

artifact.addEventListener("click", () => {
  clearInterval(interval);
  window.location.assign("./index.html");
});



