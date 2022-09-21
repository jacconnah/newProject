
var animateButton = function (e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function () {
        e.target.classList.remove('animate');
    }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}

function revealMessage() {
    document.getElementById("hiddenMessage").style.display = 'inline';
}

function changeText(element) {
    element.innerHTML = "scroll down for more";
}
function resetText(element) {
    element.innerHTML = " Hi, welcome to my website."
}

function returnBackground() {
    document.getElementById("bigtitle").style.color = '#97B5BD';
}
function revealProjects() {
    document.getElementById("examples").style.display = 'block';
}

function revealExperience() {
    document.getElementById("showJobs").style.display = 'block';
}