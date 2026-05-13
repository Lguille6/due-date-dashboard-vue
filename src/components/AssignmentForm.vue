<!-- src/components/AssignmentForm.vue -->
<template>
  <div class="assignment-card">
    <h2 class="form-title">Add Assignment</h2>

    <div class="form-grid">
      <div class="input-group">
        <label for="title">Assignment Title</label>
        <input
          id="title"
          v-model="form.title"
          type="text"
          placeholder="e.g., Chemistry Lab"
        />
      </div>

      <div class="input-group">
        <label for="course">Course Name</label>
        <input
          id="course"
          v-model="form.course"
          type="text"
          placeholder="e.g., CHEM 101"
        />
      </div>

      <div class="input-group">
        <label for="dueDate">Due Date</label>
        <input id="dueDate" v-model="form.date" type="date" />
      </div>

      <!-- NEW COLORFUL PRIORITY SELECTOR -->
      <div class="input-group">
        <label for="priority">Priority Status</label>
        <select id="priority" v-model="form.priority" class="priority-select">
          <option value="high">🔴 High Priority</option>
          <option value="medium">🟡 Medium Priority</option>
          <option value="low">🟢 Low Priority</option>
        </select>
      </div>
    </div>

    <div class="form-actions">
      <button class="btn btn-save" @click="handleSave">Save</button>
      <button class="btn btn-cancel" @click="handleCancel">Cancel</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["save", "cancel"]);

const form = ref({
  title: "",
  course: "",
  date: "",
  priority: "medium", // Default selection
});

const handleSave = () => {
  if (!form.value.title) return;
  emit("save", { ...form.value });
  form.value = { title: "", course: "", date: "", priority: "medium" };
};

const handleCancel = () => emit("cancel");
</script>

<style scoped>
/* Keep your existing style properties, just add this new selector style */
.priority-select {
  padding: 10px 14px;
  border: 1px solid var(--border-color, #cbd5e1);
  border-radius: 6px;
  font-size: 14px;
  background: var(--bg-card, #ffffff);
  color: var(--text-main, #0f172a);
  outline: none;
  cursor: pointer;
}
</style>
