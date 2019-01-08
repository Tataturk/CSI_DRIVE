import jquery;
document.getElementById("header").innerHTML =
  localStorage["header"] || "Naam van bestand.txt";
document.getElementById("content").innerHTML =
  localStorage["content"] || "Hier komt text van geopende bestand.";

setInterval(function()  {
  localStorage.setItem("header",document.getElementById("header").innerHTML);
  localStorage.setItem("content",document.getElementById("content").innerHTML);
  localStorage["header"] || document.getElementById("header").innerHTML
  localStorage["content"] || document.getElementById("content").innerHTML
},1000);
