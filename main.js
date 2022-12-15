// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

// create variable that will contain each div with the class of the color
const allColors = document.querySelectorAll("#palette div.color");  

// create a variable that will contain the #current-color element 
const currentColor = document.querySelector("#current-color");

// loop through color variable and and add an event listener for each color that will change  the #current-color element to the clicked color 
  
allColors.forEach((colorElement) => {
  colorElement.addEventListener('click', () => {
    
    currentColor.style.background = colorElement.style.background;

  });
});

// create a variable that will contain each div with the class of cell
const everyCell = document.querySelectorAll("#canvas div.cell"); 

// loop through the cells array/node list. Add an event listener for when each cell is clicked 
everyCell.forEach((cell) => {
  cell.addEventListener('click', (event) => {

// change background of clicked cell to be the same as the background of the current color
event.target.style.background = currentColor.style.background;
  });

  // Add an event listiner for when each cell is double clicked. Change background to white

  cell.addEventListener('mouseover', erase)

});

function erase(event) {
  event.target.style.background = "white"
}
