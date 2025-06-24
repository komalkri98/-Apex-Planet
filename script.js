document.addEventListener("DOMContentLoaded", () => {
  const topNavBtns = document.querySelectorAll(".top-nav-btn");
  const sideNavLinks = document.querySelectorAll(".side-nav-link");
  const contentSections = document.querySelectorAll(".content-section");
  const body = document.body;

  const todoForm = document.getElementById("todo-form");
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  function showSection(id) {
    contentSections.forEach((section) => {
      section.classList.toggle("active", section.id === id);
    });
  }

  topNavBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      topNavBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      if (btn.dataset.target === "portfolio") {
        body.classList.remove("todo-active");
        showSection("about");
        sideNavLinks.forEach((link, idx) => {
          link.classList.toggle("active", idx === 0);
        });
      } else if (btn.dataset.target === "todo") {
        body.classList.add("todo-active");
        showSection("todo");
        sideNavLinks.forEach((link) => link.classList.remove("active"));
      }
    });
  });

  sideNavLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      sideNavLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
      showSection(link.dataset.target);
    });
  });

  if (todoForm) {
    todoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const task = todoInput.value.trim();
      if (!task) return;
      const li = document.createElement("li");
      li.textContent = task;

      li.addEventListener("click", () => {
        li.classList.toggle("completed");
      });
      li.addEventListener("dblclick", () => {
        li.remove();
      });
      todoList.appendChild(li);
      todoInput.value = "";
    });
  }
});