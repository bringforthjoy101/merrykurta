const btn = document.getElementById("btn"),
  Nav = document.getElementById("Nav"),
  line1 = document.getElementById("line1"),
  line2 = document.getElementById("line2"),
  line3 = document.getElementById("line3"),
  ul = document.getElementById("ul_links");
btn.addEventListener("click", () => {
  Nav.classList.toggle("active_Nav");
  ul.classList.toggle("active_ul");
  line1.classList.toggle("line1");
  line2.classList.toggle("line2");
  line3.classList.toggle("line3");
});
