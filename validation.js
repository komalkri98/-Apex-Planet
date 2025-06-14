document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); 
  let isValid = true;
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageBox = document.getElementById("submitMessage");
  if (nameInput.value.trim() === "") {
    nameError.style.display = "block";
    isValid = false;
  } else {
    nameError.style.display = "none";
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.style.display = "block";
    isValid = false;
  } else {
    emailError.style.display = "none";
  }
  if (isValid) {
    messageBox.style.display = "block";
    messageBox.textContent = "Data submitted successfully!";
    this.reset();
  } else {
    messageBox.style.display = "none";
  }
});
document.getElementById("addTodo").addEventListener("click", function () {
  const input = document.getElementById("todoInput");
  const task = input.value.trim();

  if (task !== "") {
    const li = document.createElement("li");
    li.textContent = task;

    const delBtn = document.createElement("button");
    delBtn.textContent = "×";
    delBtn.onclick = () => li.remove();

    li.appendChild(delBtn);
    document.getElementById("todoList").appendChild(li);

    input.value = "";
  }
});