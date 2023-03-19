window.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".item");
  items.forEach(item => {
    item.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("itemId", e.target.id);

      console.log("drag start.", item);

    });
  });

  const dropZone = document.getElementById("drop-zone");
  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();

    console.log("drag over");

  });

  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("itemId");
    const tal = document.getElementById(data);

    e.target.appendChild(tal);

    console.log("drop:", data);
    
    // dropZone.innerHTML = data;
    // dropZone.appendChild(data);


  });

});