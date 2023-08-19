function getInputValue(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputValue = parseFloat(inputField.value);
  inputField.value = "";
  return inputValue;
}
function setArea(areaField, area) {
  document.getElementById(areaField).innerText = area;
}

function calculateArea(inputId1, inputId2, shape, areaField) {
  const input1 = getInputValue(inputId1);
  const input2 = getInputValue(inputId2);

  if (isNaN(input1) || isNaN(input2)) {
    alert("Please Enter valid Input!!!");
    return;
  }
  let area = 0;
  switch (shape) {
    case "triangle":
      area = (0.5 * input1 * input2).toFixed(2);
      break;
    case "rectangle":
      area = (input1 * input2).toFixed(2);
      break;
    case "parallelogram":
      area = (input1 * input2).toFixed(2);
      break;
    case "rhombus":
      area = (0.5 * input1 * input2).toFixed(2);
      break;
    case "pentagon":
      area = (0.5 * input1 * input2).toFixed(2);
      break;
    case "ellipse":
      area = (Math.PI * input1 * input2).toFixed(2);
      break;
  }

  setArea(areaField, area);
}
