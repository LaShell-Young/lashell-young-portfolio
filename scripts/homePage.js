// array of images
const images = ['./images/lashell2021Grad.JPG', './images/lashell_pic2.PNG', './images/lashell_pic3.PNG'];
var index = 1;

function changeImg() {
    //get element by id and change image src
    document.getElementById('headerImg').src = images[index];
    index++;
    if (index >= images.length) {
        index = 0;
    }
}

// function updatePage() {
//     document.getElementById('contactSection').innerHTML += '<h1>test</h1>';
    
//     // `
//     //     <div class="w3-padding-64 w3-content w3-text-grey" id="contact">
//     //         <h2 class="w3-text-light-grey">Contact Me</h2>
//     //         <hr style="width:200px" class="w3-opacity">

//     //         <div class="w3-section">
//     //             <p><i class="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Texas, US</p>
//     //             <p><i class="fa fa-linkedin-square fa-fw w3-text-white w3-xxlarge w3-margin-right"></i><a href="https://www.linkedin.com/in/lashell-young"> Check out my LinkedIn</a></p>
//     //             <p><i class="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i>lashellyoung15@gmail.com</p>
//     //         </div><br>
//     //     </div>
//     // `;

// }