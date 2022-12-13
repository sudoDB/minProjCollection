/* Rgb color palette picker to hex values */

var head = document.createElement('div');
head.innerHTML = '<h1>HEX Color Picker</h1><br>';
document.body.appendChild(head);


var colorPicker = document.createElement('input');
colorPicker.type = 'color';
colorPicker.value = '#ff0000';
document.body.appendChild(colorPicker);

var colorPickerValue = document.createElement('div');
colorPickerValue.innerHTML = colorPicker.value;
document.body.appendChild(colorPickerValue);


colorPicker.addEventListener('input', function() {
  colorPickerValue.innerHTML = colorPicker.value;
});

