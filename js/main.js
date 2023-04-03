// Navbar-Shrink-Start
window.addEventListener("scroll", function () {
  shrink();
});
let navbar = document.getElementById("navig");
function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
		navbar.classList.remove("navbar-shrink");
	}
}
//Navbar-Shrink-End

//Navbar-Toogle-Start
function openNavbar() {
  document.getElementById("navbar-responsive").style.right = "0";
}
function closeNavbar() {
  document.getElementById("navbar-responsive").style.right = "-100%";
}
document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);
//Navbar-Toogle-End