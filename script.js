// Example data (replace this with your actual resume data)
const experienceData = [
    { title: "Test Engineer", company: "Vantage Circle", duration: "Nov 2022 - Present", description: "UAT Testing, End to End testing..." },
    { title: "Test Engineer Intern", company: "Vantage Circle", duration: "Jul 2022 - Oct 2022", description: "Started Training with Different types of Testing..." },
];

const educationData = [
    { degree: "Bachelor of Technology - BTech", major: "Computer Science", school: "Kaziranga University", duration: "Aug 2018 - May 2022" },
    // Add more education entries if needed
];

const certificationData = [
    "Cloud Computing & Virtualization Graduate - IBM",
    "MySQL Database Development Mastery - Udemy",
    "Selenium WebDriver with Python using Pytest - Udemy",
    "Learn API automation with Python and BDD - Udemy",
    "SQL Basic - HackerRank",
];

const skillsData = ["JavaScript", "Test Scripts", "Python (Programming Language)", "Software Quality", "Bug Tracking", "Manual Test Execution", "Cross-functional Coordination", "Grafana", "Jenkins", "Database Management System (DBMS)"];

// Function to populate experience section
function populateExperience() {
    const experienceList = document.getElementById("experience-list");
    experienceData.forEach(entry => {
        const div = document.createElement("div");
        div.innerHTML = `<h3>${entry.title} - ${entry.company}</h3><p>${entry.duration}</p><p>${entry.description}</p>`;
        experienceList.appendChild(div);
    });
}

// Function to populate education section
function populateEducation() {
    const educationList = document.getElementById("education-list");
    educationData.forEach(entry => {
        const div = document.createElement("div");
        div.innerHTML = `<h3>${entry.degree} in ${entry.major}</h3><p>${entry.school} (${entry.duration})</p>`;
        educationList.appendChild(div);
    });
}

// Function to populate certifications section
function populateCertifications() {
    const certificationsList = document.getElementById("certifications-list");
    certificationData.forEach(cert => {
        const div = document.createElement("div");
        div.innerHTML = `<p>${cert}</p>`;
        certificationsList.appendChild(div);
    });
}

// Function to populate skills section
function populateSkills() {
    const skillsList = document.getElementById("skills-list");
    skillsData.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
    });
}

// Populate resume sections on page load
document.addEventListener("DOMContentLoaded", () => {
    populateExperience();
    populateEducation();
    populateCertifications();
    populateSkills();
});
