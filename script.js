let openMenu = document.querySelector("#menu");
let closeMenu = document.querySelector("#close");
let navigation = document.querySelector(".navigation");
let navLinks = document.querySelectorAll(".navigation a");

openMenu.addEventListener("click", () => {
  navigation.style.transform = "translateX(0)";
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navigation.style.transform = "translateX(100%)";
  })
})

