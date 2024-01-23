//Kaspar Tõnisson
//IT-21
//30.11.23


document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");
    const vastusekast = document.querySelector('.vastusekast');

    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const city = document.getElementById("city").value;
        const country = document.getElementById("country").value;
        const password = document.getElementById("password").value;

        const result = `
        Eesnimi: ${firstName}
        Perekonnanimi: ${lastName}
        E-posti aadress: ${email}
        Sugu: ${gender}
        Linn: ${city}
        Riik: ${country}
        Parool: ${password}
        `;

        vastusekast.textContent = result;
    });
});
console.log("JavaScript code is running");