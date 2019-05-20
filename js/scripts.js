
// grab the elements you want to manipulate
var pageBody = document.querySelector('.portfolio-body');
var uglifyButton = document.getElementById('ugly-button');


// function to remove the portfolio-body class and apply the ugly class on click
function uglify() {
    pageBody.classList.remove('portfolio-body');
    pageBody.classList.add('ugly');
}

function beautify() {
    pageBody.classList
}
// activate the button onclick
uglifyButton.onclick = uglify;
//uglifyButton.addEventListener('click', uglify());