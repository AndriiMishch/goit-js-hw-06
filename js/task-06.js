const input = document.querySelector("#validation-input");

input.addEventListener("blur", (evt) => {
  if (evt.currentTarget.value.length === Number(input.dataset.length)) {
    isValid();
  } else {
    isInvalid();
  }
});

function isValid() {
  input.classList.add("valid");
  input.classList.remove("invalid");
}

function isInvalid() {
  input.classList.add("invalid");
  input.classList.remove("valid");
}
