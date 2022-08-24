var b1 = document.getElementById("comprasPorPlataforma");
b1.style.display = "none";
var b2 = document.getElementById("queEsBitcoin");
b2.style.display = "none";
var b3 = document.getElementById("comoTransaccion");
b3.style.display = "none";
var b4 = document.getElementById("aseguroCompras");
b4.style.display = "none";

function showHide_1() {
    if (b1.style.display === "none") {
      b1.style.display = "block";
    } else {
      b1.style.display = "none";
    }   
}
function showHide_2() {
    if (b2.style.display === "none") {
      b2.style.display = "block";
    } else {
      b2.style.display = "none";
    }
}
function showHide_3() {
    if (b3.style.display === "none") {
      b3.style.display = "block";
    } else {
      b3.style.display = "none";
    }
}
function showHide_4() {
    if (b4.style.display === "none") {
      b4.style.display = "block";
    } else {
      b4.style.display = "none";
    }
}