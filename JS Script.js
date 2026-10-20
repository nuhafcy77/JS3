// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Select form elements
  const studentForm = document.getElementById("studentForm");
  const nameInput = document.getElementById("studentName");
  const schoolInput = document.getElementById("schoolName");
  const courseInput = document.getElementById("course");
  const formMessage = document.getElementById("formMessage");

  // Select card output elements
  const cardResult = document.getElementById("cardResult");
  const cardStudentName = document.getElementById("cardStudentName");
  const cardSchoolName = document.getElementById("cardSchoolName");
  const cardCourse = document.getElementById("cardCourse");
  const cardNumber = document.getElementById("cardNumber");

  // Handle form submission
  studentForm.addEventListener("submit", (event) => {
    // Prevent default form submission page refresh
    event.preventDefault();

    // Get input values and trim whitespace
    const nameVal = nameInput.value.trim();
    const schoolVal = schoolInput.value.trim();
    const courseVal = courseInput.value.trim();

    // Basic Form Validation
    if (!nameVal || !schoolVal || !courseVal) {
      formMessage.textContent = "Please fill in all fields before generating the card.";
      return;
    }

    // Clear any previous error messages
    formMessage.textContent = "";

    // Generate a random 4-digit card number
    const randomCardNo = Math.floor(1000 + Math.random() * 9000);

    // Update the card preview with the input values
    cardStudentName.textContent = nameVal;
    cardSchoolName.textContent = `School: ${schoolVal}`;
    cardCourse.textContent = `Course: ${courseVal}`;
    cardNumber.textContent = `Card No: SC-${randomCardNo}`;

    // Reveal the card section
    cardResult.removeAttribute("hidden");

    // Optional: Smooth scroll to the generated card
    cardResult.scrollIntoView({ behavior: "smooth" });
  });
});