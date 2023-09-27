document.addEventListener("DOMContentLoaded", function () {
  const convertButton = document.getElementById("convertButton");
  const inputValue = document.getElementById("inputValue");
  const inputUnit = document.getElementById("inputUnit");
  const output = document.getElementById("output");

  convertButton.addEventListener("click", function () {
      const value = parseFloat(inputValue.value);
      const unit = inputUnit.value;

      if (!isNaN(value)) {
          const conversions = {
              bytes: 1,
              kilobytes: 1024,
              megabytes: 1024 * 1024,
              gigabytes: 1024 * 1024 * 1024,
          };

          const convertedValue = value * conversions[unit];

          output.textContent = `${value} ${unit} = ${convertedValue} bytes`;
      } else {
          output.textContent = "Please enter a valid number.";
      }
  });
});
