const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const weightguide = document.querySelector("#weightguide");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    switch (true) {
      case bmi < 18.6:
        weightguide.innerHTML = `<span>underweight</span>`;
        break;
      case bmi > 18.6 && bmi < 24.9:
        weightguide.innerHTML = `<span>normal</span>`;
        break;
      case bmi > 24.9:
        weightguide.innerHTML = `<span>overweight</span>`;
        break;
        default:
            weightguide.innerHTML = `<span>bmi is not valid</span>`
    }
  }
});
