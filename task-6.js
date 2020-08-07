const validationInputRef = document.querySelector("#validation-input");

validationInputRef.addEventListener("blur", (event) => {
    const inputData = event.target;
    const dataLength = Number(event.target.getAttribute("data-length"));
    if (inputData.value.length === dataLength) {
        validationInputRef.classList.add("valid");
        validationInputRef.classList.remove("invalid")
    }
    else {
        validationInputRef.classList.add("invalid")
    validationInputRef.classList.remove("valid")}
    }
);