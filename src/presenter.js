import generarFizzBuzz from "./fizzbuzz";

const first = document.querySelector("#primer-numero");
const form = document.querySelector("#Generar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);

  div.innerHTML = "<p>" + generarFizzBuzz(firstNumber) + "</p>";
});
