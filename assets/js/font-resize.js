// font-resize.js

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const btnIncrease = document.getElementById("btnIncreaseFontSize");
  const btnDecrease = document.getElementById("btnDecreaseFontSize");
  const announce = document.getElementById("font-announcement");

  let fontSize = 100; // percentage
  const minSize = 80;
  const maxSize = 600;

  function updateFontSize() {
    body.style.fontSize = fontSize + "%";
    
  }

  btnIncrease.addEventListener("click", () => {
    if (fontSize < maxSize) {
      fontSize += 10;
      updateFontSize();
    }
  });

  btnDecrease.addEventListener("click", () => {
    if (fontSize > minSize) {
      fontSize -= 10;
      updateFontSize();
    }
  });
});

