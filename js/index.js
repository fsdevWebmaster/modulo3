window.addEventListener("DOMContentLoaded", () => {

  menuBtn.addEventListener("click", () => {
    window.location.href = "/pages/menu.html";
  });

  const familyName = document.URL.split("?")[1];
  const family = families[familyName];

  
  familyTitle.innerHTML = family.title;

  console.log(family);

});
