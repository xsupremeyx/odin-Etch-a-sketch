const container = document.querySelector("#container");
container.classList.add("container")



for(let i = 0; i < 16*16; i++ ){
    const tile = document.createElement("div");
    tile.classList.add("tile");
    container.appendChild(tile);
}