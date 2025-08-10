const body = document.querySelector("body");
const container = document.querySelector("#container");
const divContainer = document.createElement("div");

//Creation and styling of buttons (Create and Reset buttons, Input pole)
const input = document.createElement("select");
input.classList.add("select");

const createButton = document.createElement("button");
createButton.classList.add("button");
createButton.textContent = "Create";

const resetButton = document.createElement("button");
resetButton.classList.add("button");
resetButton.textContent = "Reset";

const containerRight = document.createElement("div");
containerRight.classList.add("containerRight");
containerRight.style.cssText = `
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
`;

//Theme text (Etch-a-Sketch)
const theme = document.createElement("a");
theme.classList.add("a1");
theme.textContent = "Etch-A-Sketch";
theme.href = "https://en.wikipedia.org/wiki/Etch_A_Sketch";
theme.target = "_blank";
theme.style.cssText = `
font-size: 36px;
font-weight: bold;
font-family: Verdana, Geneva, Tahoma, sans-serif;
text-decoration: none;
`;

const mini = document.createElement("div");
mini.style.cssText = `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;

//Made by NurPacqiao (text and link)
const text = document.createElement("p");
text.classList.add("text");
text.textContent = "Made by ";

const link = document.createElement("a");
link.classList.add("a2");
link.textContent = "NurPacqiao";
link.href = "https://github.com/NurPacqiao";
link.target = "_blank";
link.style.textDecoration = "none";
link.style.marginLeft = "10px";

mini.append(text, link);

divContainer.style.cssText = `
margin: 100px;
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

divContainer.append(input, createButton, resetButton);
containerRight.append(theme, divContainer, mini);
body.append(containerRight, container);

//Function to create grid with a given size
function makeGrid(size) {
    container.innerHTML = '';
    const cellSize = `calc(${100 / size}% - 1px)`;
    for (let i = 0; i < size * size; i++) {
        const grid = document.createElement("div");
        grid.classList.add("gridClass");
        grid.style.border = "solid 0.5px black";
        grid.style.background = "grey";
        grid.style.width = cellSize;
        grid.style.height = cellSize;
        grid.addEventListener("mouseenter", () => {
            grid.style.background = "red";
        });
        container.appendChild(grid);
    }
}

function start(){
    makeGrid(8);
}

function reset(){
    const grids = document.querySelectorAll(".gridClass");
    grids.forEach(grid => {
        grid.style.background = "grey";
    });
    createButton.disabled = false;
}

resetButton.addEventListener("click", reset);

createButton.addEventListener("click", () => {
    if (input.value === '') {
        createButton.disabled = true;
        alert("Please, choose your grid size!");
        return;
    }
    makeGrid(input.value);
    input.value = "";
    createButton.disabled = true;
});

input.addEventListener("input", () => {
    createButton.disabled = input.value === '';
});

start();