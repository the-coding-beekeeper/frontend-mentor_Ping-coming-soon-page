const inputEl = document.getElementById("user-input");
const errorMessage = document.getElementById("error-message");
const btn = document.getElementById("notify");
const form = document.getElementById("input-form");

inputEl.addEventListener("keydown", handleInput);
btn.addEventListener("click", validation);

function handleInput(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    validation();
  }
}
function validation() {
    if(inputEl.validity.valid) {
      errorMessage.style.display = "none";
      inputEl.style.border = "1px solid var(--pale-blue)";
      submission();
    } else {   
      errorMessage.style.display = "block";
      inputEl.style.border = "1px solid var(--light-red)";
      inputEl.style.color = "black";
    }
  }
function submission() {
  form.submit();
  form.reset();
}
