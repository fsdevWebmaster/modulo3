window.addEventListener("DOMContentLoaded", () => {

  menuBtn.addEventListener("click", () => {
    window.location.href = "/pages/menu.html";
  });

  const familyName = document.URL.split("?")[1];
  const family = families[familyName];
  if (familyName && family) {
    familyTitle.innerHTML = family.title;
    familyText.innerHTML = family.text;
    pieceTitle.innerHTML = family.piece;
    pieceAuthor.innerHTML = family.author;
    familyBg.style.backgroundImage = `url('${family.bgUrl}')`;
    pieceBtn.setAttribute("href", family.video);
  }  
});
