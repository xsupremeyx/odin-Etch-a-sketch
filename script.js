function gridMaker(){
    for(let i = 0; i < 16*16; i++ ){
        const tile = document.createElement("div");
        tile.classList.add("tile");
        container.appendChild(tile);
    }
}

function hoverMouse(tileset){
    tileset.forEach(tile => {
        tile.addEventListener("mouseover", (event) => {
            event.target.classList.add("hovered");
        });
    });
}


const container = document.querySelector("#container");
container.classList.add("container")
gridMaker();
const tileset = document.querySelectorAll(".tile");
hoverMouse(tileset);




