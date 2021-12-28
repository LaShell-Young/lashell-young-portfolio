// control and manipulate portfolio item list
import PortfolioItem from "./portItem.js"; 

// create object using portfolio item class
const item1 = new PortfolioItem(
    "Falling Ball", 
    "A simple animation of a ball falling down a course.", 
    "Beginner", 
    1,
    "./images/FallingBallThumbnail.png",
    "https://play.unity.com/mg/other/floorislavabuild-27"
);
// console.log('The name of 1st project in portfolio is:', item1.name);
// item1.updateName('test');
const item2 = new PortfolioItem(
    "Maze Explore", 
    "A game where the player controls a ball and traverses a maze.", 
    "Beginner", 
    2,
    "./images/MazeExploreThumbnail.png",
    "https://play.unity.com/mg/other/maze-explore-1"
);

// update HTML element with portfolio item data
function updatePorfolio() {
    // array of portfolio items
    const projects = [];
    let num = projects.push(item1, item2);

    console.log(`There are ${num} portfolio items.`);

    let i = 1;
    for(let item in projects){
        // get html element and change innerHTML
        document.getElementById(`item${i}`).innerHTML += `
            <div class="w3-row">
                <div class="w3-col w3-container s3">
                    <img src=${projects[item].image} class="w3-image" alt="game thumbnail" width="400" height="200" />
                </div>
                <div class="w3-col w3-container s9">
                    <p><a href=${projects[item].url}> ${projects[item].name}</a></p>
                    <p>${projects[item].description}</p>
                    <p style="display: inline-block;">
                        Difficulty: &nbsp;
                        <p id="0_diff" style="display: inline-block;">${projects[item].difficulty}</p>
                    </p>
                </div>
            </div>
        `;
        i++;
    }
}
// updatePorfolio();


export default updatePorfolio();