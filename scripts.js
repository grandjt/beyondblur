document.getElementById('diopter-slider').addEventListener('input', function() {
  const diopterValue = this.value;
  document.getElementById('diopter-value').textContent = diopterValue;
  
  const imgSrc = `classroom-${Math.abs(diopterValue)}.jpg`;
  document.getElementById('classroom-img').src = imgSrc;
});
