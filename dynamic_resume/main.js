var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    // Fetch input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var education = document.getElementById("education").value;
    var skills = document.getElementById("skills").value.split(",");
    var experience = document.getElementById("experience").value;
    // Input validation (simple example)
    if (!name || !email || !education) {
        alert("Please fill out all required fields.");
        return;
    }
    // Validate email format
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    // Update resume display in real-time
    document.getElementById("displayName").innerText = name;
    document.getElementById("displayEmail").innerText = email;
    document.getElementById("displayEducation").innerText = education;
    // Update skills list
    var skillsList = document.getElementById("displaySkills");
    skillsList.innerHTML = ""; // Clear existing skills
    skills.forEach(function (skill) {
        var listItem = document.createElement("li");
        listItem.innerText = skill.trim();
        skillsList.appendChild(listItem);
    });
    document.getElementById("displayExperience").innerText = experience;
});
function validateEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
