// Select the button and the skills list
var toggleButton = document.getElementById('toggle-skills');
var skillsList = document.getElementById('skills-list');
// Add an event listener to toggle the visibility of the skills list
toggleButton.addEventListener('click', function () {
    if (skillsList.style.display === 'none') {
        skillsList.style.display = 'block';
    }
    else {
        skillsList.style.display = 'none';
    }
});
