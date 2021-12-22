const images = ['./images/lashell2021Grad.JPG', './images/lashell-pic2.png', './images/lashell-pic3.png'];
var index = 1;

function changeImg() {
    //get element by id and change image src
    document.getElementById('headerImg').src = images[index];
    index++;
    if (index >= images.length) {
        index = 0;
    }
}
