//Kaspar Tõnisson
//11.10.23

document.addEventListener("DOMContentLoaded", function() {
    const cardElements = document.querySelectorAll(".card");
  
    cardElements.forEach(card => {
      const img = card.querySelector(".card-img-top");
      const title = card.querySelector(".card-title");
      const description = card.querySelector(".card-text");
  
      const titleData = img.getAttribute("data-title");
      const descriptionData = img.getAttribute("data-description");
  
      title.textContent = titleData;
      description.textContent = descriptionData;
    });
  });
  