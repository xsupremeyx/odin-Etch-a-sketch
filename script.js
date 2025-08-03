function gridMaker(container,num){
    
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    const containerSize = 960;
    const borderSize = 2;
    const tSize =+(containerSize / num).toFixed(2);

    for(let i = 0; i < num*num; i++ ){
        const tile = document.createElement("div");
        tile.classList.add("tile");
        container.appendChild(tile);
        tile.style.width = `${tSize - borderSize}px`;
        tile.style.height = `${tSize - borderSize}px`;
    }
}

function hoverMouse(tileset){
    tileset.forEach(tile => {
        tile.addEventListener("mouseover", (event) => {
            event.target.classList.add("hovered");
        });
    });
}

function promptBttn(input){

    let numtiles = prompt("Enter the number of tileset: ",input.value);
    return +numtiles;
}

function buttonClick(container){
    //WORK OVER HERE
    const setTilebttn = document.querySelector("#resize");

    setTilebttn.addEventListener("click",()=>{
        const input = document.querySelector("#gridSize");
        let numtiles = promptBttn(input);
        if (isNaN(numtiles) || numtiles <= 0 || numtiles > 100) {
            numtiles = 16;
            input.value = 16;
        }
        input.setAttribute("value",numtiles);
        gridMaker(container,numtiles);
        const tileset = document.querySelectorAll(".tile");
        hoverMouse(tileset);

    });
}


const container = document.querySelector("#container");
container.classList.add("container")
gridMaker(container,16);
const tileset = document.querySelectorAll(".tile");
hoverMouse(tileset);
buttonClick(container);







