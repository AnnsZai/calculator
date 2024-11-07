function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function calculate() {
    try {
      document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
      alert('Invalid expression');
      clearDisplay();
    }
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  