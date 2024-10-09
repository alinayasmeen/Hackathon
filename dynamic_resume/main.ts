document.getElementById("resumeForm")?.addEventListener("submit", function (event) {
  event.preventDefault();

  // Fetch input values
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const education = (document.getElementById("education") as HTMLInputElement).value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value.split(",");
  const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;

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
  (document.getElementById("displayName") as HTMLSpanElement).innerText = name;
  (document.getElementById("displayEmail") as HTMLSpanElement).innerText = email;
  (document.getElementById("displayEducation") as HTMLParagraphElement).innerText = education;

  // Update skills list
  const skillsList = document.getElementById("displaySkills") as HTMLUListElement;
  skillsList.innerHTML = ""; // Clear existing skills
  skills.forEach(skill => {
      const listItem = document.createElement("li");
      listItem.innerText = skill.trim();
      skillsList.appendChild(listItem);
  });

  (document.getElementById("displayExperience") as HTMLParagraphElement).innerText = experience;
});

function validateEmail(email: string): boolean {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
