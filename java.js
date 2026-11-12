//Funciones auxiliares sencillas
var toast = document.getElementById("toast");
var menu = document.getElementById("menu");
var menuButton = document.getElementById("menu-button");

//Mostrar un mensaje breve
function showMessage(text) {
  toast.textContent = text;
  toast.classList.add("show");
  setTimeout(function () {
    toast.classList.remove("show");
  }, 2000);
}

// Tarjetas de productos: mensaje de proximamentee
var products = document.querySelectorAll(".product");
products.forEach(function (product) {
  product.addEventListener("click", function () {
    var name = product.querySelector(".product-image").textContent;
    showMessage(name + ": próximamente");
  });
});

// Tarjetas de miembro: mostrar el nombre del miembro
var members = document.querySelectorAll(".member");
members.forEach(function (member) {
  member.addEventListener("click", function () {
    showMessage(member.dataset.name);
  });
});

// Menu del movil
menuButton.addEventListener("click", function (event) {
  event.preventDefault();
  menu.classList.toggle("open");
});

menu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("open");
  });
});
// Resaltar el enlace activo al desplazarse
var links = menu.querySelectorAll("a");
var sections = ["about", "members", "ep", "merch"];

window.addEventListener("scroll", function () {
  var current = "";
  sections.forEach(function (id) {
    var section = document.getElementById(id);
    if (window.scrollY >= section.offsetTop - 120) {
      current = id;
    }
  });
  links.forEach(function (link) {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === "#" + current,
    );
  });
});
