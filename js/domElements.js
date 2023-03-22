const menuBtn = document.getElementById("menu-btn");
const mainNavBtns = document.querySelectorAll(".menu-container a");
let selectedFamily;
const familyTitle = document.querySelector(".family-info h1");
const familyText = document.querySelector(".family-info p");
const pieceTitle = document.querySelector(".family-info h2");
const pieceAuthor = document.querySelector(".family-info h3");
let familyInfo;

mainNavBtns.forEach(navBtn => {
  navBtn.addEventListener("click", (e) => {
    e.preventDefault();
    selectedFamily = navBtn.getAttribute("data-family");
    familyInfo = families[selectedFamily];
    window.location.href = `/pages/family.html?${selectedFamily}`;
  });
});

// familyTitle.innerHTML = familyInfo.title;





