
const div = document.createElement("div");
div.classList.add("grid-item");
document.body.appendChild(div);

let set = 5; //Dimension by default

const container = document.getElementById("grid-container");
//container.style.gridTemplateColumns= "auto auto";

let col = "";

for (i = 0; i < set; i++) {
    col = col + "auto "

}

document.getElementById("grid").style.gridTemplateColumns = col;
//container.grid-template-columns()
let num = 960 / set - 2;

dimByDim(set);

function dimByDim(dim) {
    for (let i = 0; i < dim * dim; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-item");
        div.style.width = num.toString() + "px";
        div.style.height = num.toString() + "px";
        document.body.appendChild(div);
        div.addEventListener("mouseover", function (event) {
            div.style.background = "yellow";
        })



        div.innerText = "";

        document.getElementById("grid").appendChild(div);
        var test = document.getElementsByClassName("grid-item");
        // test.classList.add("mystyle");
        div.classList.add("grid-item");

    }
}



function reset() {
    var grids = document.getElementsByClassName('grid-item');
    for (i = 0; i < grids.length; i++) {
        grids[i].style.backgroundColor = "white";


    }
}


const res = document.createElement("button");
res.classList.add("res");
document.body.appendChild(res);
res.innerHTML = "Reset";
res.addEventListener("click", function (event) {
    reset();
    let set = prompt("Please enter your name", "Harry Potter");
    if (set <100) 
    {
        alert("New grid size is " + set + " by " + set + ".");
        
        const boxes = document.querySelectorAll('.grid-item');

        boxes.forEach(box => {
            box.remove();
        });

        col = "";
        for (i = 0; i < set; i++) {
            col = col + "auto "

        }

        document.getElementById("grid").style.gridTemplateColumns = col;
        //container.grid-template-columns()
        num = 960 / set - 2;

        dimByDim(set);
    }


    else { "Must Choose a whole number between 1 and 100." }
}
); 