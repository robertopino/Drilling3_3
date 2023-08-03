console.log("🟢 Connected!");

const terms = document.querySelector("#terminos");
const codeBtn = document.querySelector("#codeBtn");
const code = document.querySelector("#code");

function getCode() {
  let newCode = "";

  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
  let charLength = characters.length;

  for (i = 0; i < 9; i++) {
    newCode += characters.charAt(Math.floor(Math.random() * charLength));
  }
  return newCode;
}

codeBtn.addEventListener("click", function () {
  if (!terms.checked) {
    alert(
      "Para obtener un código de descuento debe aceptar los términos y condiciones"
    );
    return;
  }
  code.textContent = getCode();
});
