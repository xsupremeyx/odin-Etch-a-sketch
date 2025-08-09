function gridMaker(container,num){
    
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    const styles = getComputedStyle(container);

    const containerSize = parseFloat(styles.width);
    const tSize =+(containerSize / num).toFixed(2);

    const rows = num;
    const cols = num;

    for(let rowIndex = 0; rowIndex < rows; rowIndex++ ){

        const row = document.createElement("div");
        row.classList.add("row");
        row.setAttribute("id",`row-${rowIndex}`);
        row.style.height = `${(containerSize/rows)}px`;
        row.style.width = `${containerSize}px`;
        container.appendChild(row);

        for(let colIndex = 0; colIndex < cols; colIndex++ ){
            const tile = document.createElement("div");
            tile.classList.add("tile");
            tile.setAttribute("id",`col-${colIndex}`);
            row.appendChild(tile);

            tile.style.width = `${tSize}px`;
            tile.style.height = `${tSize}px`;
        }
    }
}

function getRandomColor(){
    let letters = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random()*16)]
    }
    return color;
}

function hoverMouse(tileset){
    tileset.forEach(tile => {
        tile.addEventListener("mouseover", (event) => {
            event.target.classList.add("hovered");
            event.target.style.backgroundColor = getRandomColor();
        });
        tile.addEventListener("click",(event)=>{
            if(event.target.classList.contains("hovered")){
                const opacity = window.getComputedStyle(event.target).getPropertyValue("opacity");
                event.target.style.opacity = (+opacity <= 1) ? (`${+opacity + 0.25}`):("1");
            }
        });
    });
}

function promptBttn(input){

    let numtiles = prompt("Enter the number of tileset: ",input.value);
    return +numtiles;
}

function buttonClick(container){
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







