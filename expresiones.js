function saludar() {
  const nombre = "UNID";
  console.log("Hola", nombre);
}

function saludarDos() {
  const nombreDos = prompt("Ingresa un nombre");
  console.log("Hola", nombreDos);
}

function click1() {
  const boton = "apretado!";
  console.log("El boton fue", boton);
}

function hey() {
  const kev = prompt("¿Cual es tu nombre?");
  console.log("Eres muy guapo", kev);
}

function visibilidad() {
  var element = document.getElementById("myElement");
  element.style.display = element.style.display === "none" ? "block" : "none";
}

var counter = 0;

function incrementar() {
  counter++;
  document.getElementById("contar").textContent = counter;
}

function Color() {
  var element = document.getElementById("kolor");
  element.style.backgroundColor = "blue";
}

function pagina() {
  window.location.href = "https://github.com/";
}

function clase() {
  var element = document.getElementById("texto");
  element.classList.toggle("highlight");
}

function hora() {
  var now = new Date();
  var dateTimeElement = document.getElementById("hora");
  dateTimeElement.textContent = now.toLocaleString();
}

function NOMBRE() {
  var name = document.getElementById("nombre").value;
  alert("Hola, " + name + "!");
}

function calcularSum() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var sum = num1 + num2;
  document.getElementById("resultado").textContent = "Sum: " + sum;
}

function add() {
  var item = prompt("Escribe un objeto que quieras añadir a la lista:");
  if (item) {
    var list = document.getElementById("lista");
    var listItem = document.createElement("li");
    listItem.textContent = item;
    list.appendChild(listItem);
  }
}

function mostrarOcultar() {
  var element1 = document.getElementById("elemento1");
  var element2 = document.getElementById("elemento2");

  if (elemento1.style.display === "none") {
    elemento1.style.display = "block";
    elemento2.style.display = "block";
  } else {
    elemento1.style.display = "none";
    elemento2.style.display = "none";
  }
}

function temporizador() {
  var seconds = 10;
  var timerElement = document.getElementById("tiempo");

  var interval = setInterval(function () {
    timerElement.textContent = seconds;
    seconds--;

    if (seconds < 0) {
      clearInterval(interval);
      timerElement.textContent = "Se acabó el tiempo";
    }
  }, 1000);
}

function submitForm() {
  alert("Form submitted successfully!");
}

document.getElementById("Checkbox").addEventListener("change", function () {
  var submitButton = document.getElementById("aceptar");
  submitButton.disabled = !this.checked;
});

function Password() {
  var passwordInput = document.getElementById("passwordInput");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}

function scrolltotop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function fuente() {
  var element = document.getElementById("textoo");
  var currentSize = parseInt(window.getComputedStyle(element).fontSize);
  element.style.fontSize = currentSize + 2 + "px";
}

function desactivar(button) {
  button.disabled = true;
  button.textContent = "PRESIONADO!";
}

var counter = 0;

function incrementCounter() {
  counter++;
  updateCounter();
}

function decrementCounter() {
  counter--;
  updateCounter();
}

function updateCounter() {
  document.getElementById("counter").textContent = counter;
}

function showTooltip() {
  var tooltip = document.getElementById("tooltip");
  tooltip.style.visibility = "visible";
}

function hideTooltip() {
  var tooltip = document.getElementById("tooltip");
  tooltip.style.visibility = "hidden";
}

function noche() {
  document.body.classList.toggle("dark-mode");
}
