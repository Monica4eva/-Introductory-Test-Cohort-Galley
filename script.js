 
const change1 = document.getElementById("Dress1");
const change2 = document.getElementById("Dress2");
const change3 = document.getElementById("Dress3");
const change4 = document.getElementById("Dress4");
const change5 = document.getElementById("Dress5");
const change6 = document.getElementById("Dress6");

 
change1.addEventListener("click", (event) => {
  event.target.style.background = "red";  
  event.target.style.color = "white";    
});

change2.addEventListener("click", (event) => {
  event.target.style.background = "blue";
  event.target.style.color = "green";
});

change3.addEventListener("click", (event) => {
  event.target.style.background = "yellow";
  event.target.style.color = "black";
});

change4.addEventListener("click", (event) => {
  event.target.style.background = "purple";
  event.target.style.color = "white";
});

change5.addEventListener("click", (event) => {
  event.target.style.background = "pink";
  event.target.style.color = "brown";
});

change6.addEventListener("click", (event) => {
  event.target.style.background = "orange";
  event.target.style.color = "black";
});
