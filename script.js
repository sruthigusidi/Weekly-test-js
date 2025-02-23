document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".style-6");
    const input = document.querySelector(".style-5");
    const result = document.querySelector(".style-7");

    button.addEventListener("click", function () {
        const birthDate = new Date(input.value);
        if (isNaN(birthDate)) {
            result.textContent = "Please enter a valid date of birth.";
            return;
        }

        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        const dayDiff = today.getDate() - birthDate.getDate();

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        }

        result.textContent = `Your age is ${age} years old`;
    });
});
