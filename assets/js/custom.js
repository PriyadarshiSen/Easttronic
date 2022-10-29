/* indicator */
const lst = document.querySelectorAll(".lst");

function activeLink() {
  lst.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}

lst.forEach((item) => item.addEventListener("click", activeLink));

// scroll //

/* Dark Mode */
const chk = document.getElementById("chk");

chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});