document.addEventListener("DOMContentLoaded", function () {
  const themeButton = document.getElementById("theme");
  const hideNumbersButton = document.getElementById("hideNumbers");

  themeButton.addEventListener("click", function () {
    
    console.log("pihtas");

    
    if (themeButton.classList.contains("btn-dark")) {
      themeButton.classList.remove("btn-dark");
      themeButton.classList.add("btn-light");
    } else {
      themeButton.classList.remove("btn-light");
      themeButton.classList.add("btn-dark");
    }

    
    if (themeButton.classList.contains("btn-dark")) {
      themeButton.textContent = "Dark Theme";
    } else {
      themeButton.textContent = "Light Theme";
    }

    
    document.documentElement.classList.toggle("dark");
  });

  hideNumbersButton.addEventListener("click", function () {
    const phoneNumbers = document.querySelectorAll("#mob .peida");
    phoneNumbers.forEach(function (phoneNumber) {
      const hiddenPart = phoneNumber.textContent.slice(-5);
      phoneNumber.textContent = phoneNumber.textContent.replace(hiddenPart, "");
      phoneNumber.classList.remove("peida");
    });
  });
});
