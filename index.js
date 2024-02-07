
let welcomeImage = document.querySelector("#personal-image");
let submitButton = document.querySelector("#contact-btn");
let messageSuccess = document.querySelector("#success-message");
let f_button = document.querySelector("#forward-button");
let b_button = document.querySelector("#back-button");
let b_arrow_icon = document.querySelector(".b-arrow-icon");
let f_arrow_icon = document.querySelector(".f-arrow-icon");

let sliderItems = document.querySelectorAll(".slider-item");
sliderItems = [...sliderItems];

welcomeImage.addEventListener("mouseover", () => {
  welcomeImage.setAttribute("src", "https://i.ibb.co/7k2Y7s8/13.webp");
});

welcomeImage.addEventListener("mouseout", () => {
  welcomeImage.style.width = "100%";
  welcomeImage.setAttribute("src", "https://i.ibb.co/KXKv9vn/12.webp");
});

submitButton.addEventListener('click', () => {
  messageSuccess.style.display = "block";
  setTimeout(() => {
    messageSuccess.style.display = "none";
  }, 5000);
});

for (let i = 1; i < sliderItems.length; i++) {
  sliderItems[i].style.display = "none";
}

if (sliderItems[0].style.display !== "none") {
  b_button.disabled = true;
  b_arrow_icon.style.color = "#c1c1c1";
}

f_button.addEventListener('click', () => {
  let item = sliderItems.find(item => item.style.display !== "none");
  let index = sliderItems.indexOf(item);

  if (sliderItems[index + 1] !== undefined) {
    sliderItems[index].style.display = "none";
    sliderItems[index + 1].style.display = "block";
  }

  if (sliderItems[index + 2] === undefined) {
    f_button.disabled = true;
    f_arrow_icon.style.color = "#c1c1c1";
  }

  if (b_button.attributes.disabled) {
    b_button.disabled = false;
    b_arrow_icon.style.color = "#ff0080";
  }

});

b_button.addEventListener('click', () => {
  let item = sliderItems.find(item => item.style.display !== "none");
  let index = sliderItems.indexOf(item);

  if (sliderItems[index - 1] !== undefined) {
    sliderItems[index].style.display = "none";
    sliderItems[index - 1].style.display = "block";
  }

  if (sliderItems[index - 2] === undefined) {
    b_button.disabled = true;
    b_arrow_icon.style.color = "#c1c1c1";
  }

  if (f_button.attributes.disabled) {
    f_button.disabled = false;
    f_arrow_icon.style.color = "#ff0080";
  }

});
