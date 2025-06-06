const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const movies = document.querySelector(".traing-movies");
const images = document.querySelectorAll(".images-slider img");
const infoBox = document.getElementById("movie-info");
const title = document.getElementById("title");
const year = document.getElementById("year");
const age = document.getElementById("age");
const catagory = document.getElementById("catagory");
const type = document.getElementById("type");
const description = document.getElementById("description");
const movieimg = document.getElementById("movie-img");
const questions = document.querySelectorAll(".question-border");
const answers = document.querySelectorAll(".answer");
next.addEventListener("click", function () {
  movies.scrollBy({
    left: movies.clientWidth,
    behavior: "smooth",
  });
  setTimeout(updateButtons, 500);
});
prev.addEventListener("click", function () {
  movies.scrollBy({
    left: -movies.clientWidth,
    behavior: "smooth",
  });
  setTimeout(updateButtons, 500);
});
function updateButtons() {
  const scrollLeft = movies.scrollLeft;
  const scrollWidth = movies.scrollWidth;
  const clientWidth = movies.clientWidth;
  let maxScrollLeft = scrollWidth - clientWidth;
  console.log(movies.scrollLeft);
  if (scrollLeft === 0) {
    prev.style.display = "none";
    next.style.display = "block";
  } else if (scrollLeft >= maxScrollLeft - 1) {
    prev.style.display = "block";
    next.style.display = "none";
  } else {
    prev.style.display = "block";
    next.style.display = "block";
  }
}
images.forEach((image) => {
  image.addEventListener("click", () => {
    const imageTitle = image.getAttribute("data-title") || "No Title";
    const imageYear = image.getAttribute("data-year") || "Unknown Year";
    const imageAge = image.getAttribute("data-age") || "Unknown Age";
    const imageCategory =
      image.getAttribute("data-Catagory") || "Unknown Category";
    const imageType = image.getAttribute("data-type") || "Unknown Type";
    const imageDescription =
      image.getAttribute("data-description") || "No Description";
    movieimg.src = image.getAttribute("data-preview") || image.src;
    title.textContent = ` ${imageTitle}`;
    year.textContent = ` ${imageYear}`;
    age.textContent = ` ${imageAge}`;
    catagory.textContent = ` ${imageCategory}`;
    type.textContent = ` ${imageType}`;
    description.textContent = ` ${imageDescription}`;

    infoBox.style.display = "flex";
    document.body.classList.add("modal-open");
  });
});
document.getElementById("close-info").addEventListener("click", function () {
  infoBox.style.display = "none";
  document.body.classList.remove("modal-open");
});
const icons = document.querySelectorAll(".icon");
questions.forEach((questions, index) => {
  questions.addEventListener("click", () => {
    const isopen = answers[index].classList.contains("open");

    answers.forEach((answers) => answers.classList.remove("open"));
    if (!isopen) {
      answers[index].classList.add("open");
    }
  });
});

window.addEventListener("load", () => {
  movies.scrollLeft = 0;
  prev.style.display = "none";
  updateButtons();
});
