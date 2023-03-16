window.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".item");
  items.forEach(item => {
    item.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("myData", item);
      e.dataTransfer.dropEffect = "copy";

      console.log("drag start.");

    });
  });

  const dropZone = document.getElementById("drop-zone");
  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();

    console.log("drag over");

  });

  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("myData");

    dropZone.innerHTML = data;

    console.log("drop:", data);

  });

});