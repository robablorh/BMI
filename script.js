document.getElementById('bmi-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get input values
  var weight = parseFloat(document.getElementById('weight').value);
  var height = parseFloat(document.getElementById('height').value);

  // Calculate BMI
  var bmi = weight / (height * height);

  // Display BMI result
  var bmiResult = document.getElementById('bmi-result');
  bmiResult.textContent = 'Your BMI is: ' + bmi.toFixed(2);

  // Reset form
  document.getElementById('weight').value = '';
  document.getElementById('height').value = '';
});
