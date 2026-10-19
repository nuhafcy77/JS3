const nameInput = document.getElementById("studentNamed");
const schoolInput = document.getElementById("schoolName");
const courseInput = document.getElementById("course");
const cardResult = document.getElementById("cardResult")
const cardStudentName = document.getElementById("carStudentName");
const cardSchoolName = document.getElementById("cardSchoolName");
const cardCourseName = document.getElementById("cardCourse");
const formMessage = document.getElementById("formMessage");
const studentForm = document.getElementById("studentForm");

studentForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const studentName = nameInput.Value.trim();
    const schoolName = schoolInput.value.();
    const course = courseInput.value.trim();

    if (
        studentname ==="" ||
        schoolName ===""||
        course ===""
    ) {
        formMessage.textContent ="please fill in all field.";
        cardResult.hidden = true;
        return;
    }
    formMessage.textContent ="";

  cardStudentName.textContent = studentName;
  cardSchoolName.textContent = schoolName;
  cardCourse.textContent = course;

  cardResult.hidden = false

});