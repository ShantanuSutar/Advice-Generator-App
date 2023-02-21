const button = document.querySelector(".container .btn"),
  advice = document.querySelector(".container p"),
  adviceId = document.querySelector(".container header");

button.addEventListener("click", () => {
  //fetching data from api and displaying
  fetch(`https://api.adviceslip.com/advice`)
    .then((response) => response.json())
    .then((result) => {
      advice.textContent = `" ${result.slip.advice} "`;
      adviceId.textContent = `advice #${result.slip.id}`;
    });
});
