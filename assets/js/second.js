const buton = document.querySelectorAll(".openbtn");
const closebuton = document.querySelectorAll(".closebtn");

buton.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("main").style.display = "none";
  });
});

closebuton.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.display = "block";
    document.getElementById("main").style.marginLeft = "0";
  });
});
