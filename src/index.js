document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("form").addEventListener('submit', (e) => {
    e.preventDefault();
    tasks(e.target.value)
    document.querySelector('form').reset();
  })
});

function tasks(task) {
  const input = document.getElementById("new-task-description");
  let li = document.createElement("li");
  let btn = document.createElement("button")
  btn.addEventListener('click', removeTask)
  btn.textContent = 'X';
  li.inner
  li.innerHTML = `${input.value} `;
  li.appendChild(btn)
  document.querySelector("#tasks").appendChild(li);
}

function removeTask(e) {
  e.target.parentNode.remove();
}