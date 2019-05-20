
// grab the elements you want to manipulate
var pageBody = document.querySelector('.portfolio-body');
var mainSection = document.querySelector('main');
var jumbotrons = document.querySelectorAll('.jumbotron');
// buttons
var uglifyButton = document.getElementById('ugly-button');
var beautifyButton = document.getElementById('beautify-button');

// function to remove the portfolio-body class and apply the ugly class on click
function uglify() {
    pageBody.classList.remove('portfolio-body');
    mainSection.classList.remove('portfolio-main');

    jumbotrons.forEach(jumbotron => {
        jumbotron.classList.remove('jumbotron')
        jumbotron.classList.remove('description');
    });

    pageBody.classList.add('ugly');   
}

// restore to normal
function beautify() {
    pageBody.classList.remove('ugly');
    pageBody.classList.add('portfolio-body');
    mainSection.classList.add('portfolio-main');

    jumbotrons.forEach(jumbotron => {
        jumbotron.classList.add('jumbotron')
        jumbotron.classList.add('description');
    });
}

// activate the buttons onclick
uglifyButton.onclick = uglify;
beautifyButton.onclick = beautify;