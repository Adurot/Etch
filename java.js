
const div = document.createElement("div");
div.classList.add("grid-item");
document.body.appendChild(div);



for(let i=0; i<256;i++)
{
    const div = document.createElement("div");
div.classList.add("grid-item");
document.body.appendChild(div);
div.addEventListener("mouseover", function(event) {
div.style.background="orange";

});
div.innerText = "";

document.getElementById("grid").appendChild(div);
    var test=document.getElementsByClassName("grid-item");
   // test.classList.add("mystyle");
div.classList.add("grid-item");


}



function reset() {
var grids=document.getElementsByClassName('grid-item');
for(i=0; i< grids.length; i++){
grids[i].style.backgroundColor="white";


}}


const res = document.createElement("button");
res.classList.add("res");
document.body.appendChild(res);
res.innerHTML="Reset";
res.addEventListener("click", function(event)
{reset();}
); 