const families = document.querySelectorAll(".d-family");
const spots = document.querySelectorAll(".spot");


const allowDrop = (e) => {
  e.preventDefault();
}

const handleDrag = (e) => {
  e.dataTransfer.setData("text", e.target.id);
}

const handleDrop = (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData("text");
  const spot = document.getElementById(e.target.id);
  const tal = document.getElementById(data);
  spot.appendChild(tal);
  
  console.log("data:", data);
  console.log( e.target.id );

  // e.target.appendChild(data);


}