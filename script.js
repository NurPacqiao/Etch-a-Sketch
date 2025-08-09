const body = document.querySelector("body");

const container = document.querySelector("#container");

const divContainer = document.createElement("div");
const input = document.createElement("select");
const createButton = document.createElement("button");
createButton.textContent = "Create";

divContainer.style.margin = "100px";
input.style.cssText = `
margin: 25px;
border: solid 1px black;
border-radius: 4px;
font-size: 20px;
`;

createButton.style.cssText = `
border: solid 1px black;
border-radius: 6px;
font-size: 20px;
background: azure;
`;

const options = [8, 16, 32, 64, 96];

options.forEach(optionValue => {
const option = document.createElement("option");
option.value = optionValue;
option.textContent = `${optionValue} x ${optionValue}`;
input.appendChild(option);
});

body.appendChild(input);
input.id = 'size';
input.name = 'size';

divContainer.append(input, createButton);
body.append(divContainer, container);

function start(){
    for(let i = 0; i < 8 * 8; i++){
        const grid = document.createElement("div");
        grid.style.border = "solid 0.5px black";
        grid.style.background = "grey";
        grid.style.width = `calc(${100 / 8}% - 1px)`;
        grid.style.height = `calc(${100 / 8}% - 1px)`;
        container.appendChild(grid);  
    }
};

createButton.addEventListener("click", () => {
    container.innerHTML = '';
    const size = input.value;
    const cellSize = `calc(${100 / size}% - 1px)`;

    for(let i = 0; i < size * size; i++){
            const grid = document.createElement("div");
            grid.classList.add("gridClass");
            grid.style.border = "solid 0.5px black";
            grid.style.background = "grey";
            grid.style.width = cellSize;
            grid.style.height = cellSize;
            container.appendChild(grid);
            
            grid.addEventListener("mouseenter", () => {
                grid.style.background = "red";
            });
    }
    input.value = "";
});

start();