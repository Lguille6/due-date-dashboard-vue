const addBtn = document.getElementById("addBtn");
const saveBtn = document.getElementById("saveBtn");
const assignmentList = document.getElementById("assignmentList");
const assignmentForm = document.getElementById("assignmentForm");

const titleInput = document.getElementById("title");
const courseInput = document.getElementById("course");
const dueDateInput = document.getElementById("dueDate");
const priorityInput = document.getElementById("priority");

assignmentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addAssignment();
});

addBtn.addEventListener("click", () => {
  titleInput.focus();
});

function addAssignment() {
  const title = titleInput.value.trim();
  const course = courseInput.value.trim();
  const dueDate = dueDateInput.value;
  const priority = priorityInput.value;

  if (!title || !course || !dueDate) {
    alert("Please fill out all assignment fields.");
    return;
  }

  const card = document.createElement("article");
  card.className = `assignment-card priority-${priority}`;
  card.innerHTML = `
    <header>
      <div>
        <h3>${title}</h3>
        <p class="assignment-meta">
          <span class="assignment-badges">
            <span class="status-dot"></span>
            ${priority.charAt(0).toUpperCase() + priority.slice(1)} priority
          </span>
          <span>Due: ${formatDate(dueDate)}</span>
        </p>
      </div>
      <div class="card-actions">
        <button type="button" class="small-btn btn-secondary">Mark Complete</button>
        <button type="button" class="small-btn btn-danger">Delete</button>
      </div>
    </header>
  `;

  const deleteBtn = card.querySelector(".btn-danger");
  deleteBtn.addEventListener("click", () => card.remove());

  const completeBtn = card.querySelector(".btn-secondary");
  completeBtn.addEventListener("click", () => {
    card.classList.toggle("completed");
    completeBtn.textContent = card.classList.contains("completed")
      ? "Completed"
      : "Mark Complete";
  });

  assignmentList.prepend(card);
  resetForm();
}

function resetForm() {
  titleInput.value = "";
  courseInput.value = "";
  dueDateInput.value = "";
  priorityInput.value = "medium";
  titleInput.focus();
}

function formatDate(value) {
  const options = { month: "short", day: "numeric" };
  return new Date(value).toLocaleDateString(undefined, options);
}
