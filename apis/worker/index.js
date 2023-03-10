const statusNode = document.querySelector("#worker-status");
statusNode.innerHTML = "Worker ready.";
let ww;
let workerStatus;

const startWorker = () => {
  if (typeof ww === "undefined") {
    ww = new Worker("worker.js");
    statusNode.innerHTML = "Worker started."
    workerStatus = "started";
  }
  ww.onmessage = (event) => {
    statusNode.innerHTML = event.data;
    workerStatus = "terminated";
    ww.terminate();
  }
}

const stopWorker = () => {
  if (workerStatus !== "terminated" && workerStatus !== "stopped") {
    statusNode.innerHTML = "Worker stopped."
    ww.terminate();
    ww = undefined;
  }
  workerStatus = "stopped";
}

// startWorker();
