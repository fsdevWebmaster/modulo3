
let i = 0;
const limit = 2;
const timer = () => {
const timeInterval = setInterval(() => {
    if (i >= limit) {
      clearInterval(timeInterval);
      postMessage("Time end.");
    }
    i++;
  }, 1000);
};

timer();

