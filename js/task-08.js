const form = document.querySelector(".login-form");

form.addEventListener("submit", submit);


function submit(event) {
    event.preventDefault()

    const formEl = event.currentTarget.elements;
    const mail = formEl.email.value;
    const password = formEl.password.value;

    if(mail === "" || password === "") {
        alert("Всі поля мають бути заповненими")
    } else {
        const formData = {
            mail,
            password,
        };
        console.log(formData)

        form.reset()
    }
}