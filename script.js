// Get all HTML elements
const addBtn = document.getElementById("addBtn");
const cancelBtn = document.getElementById("cancelBtn");
const saveBtn = document.getElementById("saveBtn");
const modal = document.getElementById("modal");
const assignmentList = document.getElementById("assignmentList");

const titleInput = document.getElementById("title");
const courseInput = document.getElementById("course");
const dueDateInput = document.getElementById("dueDate");

// Show modal when clicking "+ Add Assignment"
addBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

// Hide modal when clicking "Cancel"
cancelBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  clearForm();
});

// Clear input boxes
function clearForm() {
  titleInput.value = "";
  courseInput.value = "";
  dueDateInput.value = "";
}

// Add card when clicking "Save"
saveBtn.addEventListener("click", () => {
  // Get values from inputs
  const title = titleInput.value;
  const course = courseInput.value;
  const dueDate = dueDateInput.value;

  // Validation check
  if (title === "" || course === "" || dueDate === "") {
    alert("Please fill out all fields!");
    return;
  }

  // Create a new div element for the card
  const card = document.createElement("div");
  card.classList.add("card");

  // Insert text and delete button into the card
  card.innerHTML = `
        <div>
            <h3>${title}</h3>
            <p>${course} - Due: ${dueDate}</p>
        </div>
        <button class="delete-btn">Delete</button>
    `;

  // Make the delete button remove its own card
  const deleteBtn = card.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    card.remove();
  });

  // Put the card onto the screen list
  assignmentList.appendChild(card);

  // Close window and reset form fields
  modal.classList.add("hidden");
  clearForm();
});
