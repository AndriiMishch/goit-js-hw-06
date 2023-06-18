const chekedInput = document.querySelector("#validation-input")

chekedInput.addEventListener("blur", textBlur)

function textBlur() {
    const text = chekedInput.value.trim();
    if(text.length === Number(chekedInput.dataset.length)) {
        chekedInput.classList.add("valid");
        chekedInput.classList.remove("invalid")
    } else {
        chekedInput.classList.add("invalid");
        chekedInput.classList.remove("valid")
    }
} 