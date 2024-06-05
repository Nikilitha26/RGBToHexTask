document.addEventListener("DOMContentLoaded", function () {
    const rgbInput = document.getElementById("rgb");
    const hexInput = document.getElementById("hex");
    const convertButton = document.getElementById("convert");
  
    convertButton.addEventListener("click", function () {
      const rgbValue = rgbInput.value;
      const hexValue = rgbToHex(rgbValue);
      hexInput.value = hexValue;
    });
  });
  
  function rgbToHex(rgb) {
    const [r, g, b] = rgb.split(",").map(Number);
    const hexR = r.toString(16).padStart(2, "0");
    const hexG = g.toString(16).padStart(2, "0");
    const hexB = b.toString(16).padStart(2, "0");
  
    return `#${hexR}${hexG}${hexB}`;
  }
  