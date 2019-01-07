document.getElementById("header").innerHTML =
  localStorage["title"] || "Just Write"; // default text
document.getElementById("content").innerHTML =
  localStorage["text"] || "hier komt ";

setInterval(function()  {
    localStorage["title"] || document.getElementById("header").innerHTML
    localStorage["text"] || document.getElementById("content").innerHTML
},1000);
