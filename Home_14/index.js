document.getElementById('calcForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const height = parseInt(document.getElementById('height').value);
    const gender = document.getElementById('gender').value;
  
    let idealWeight;
  
    if (gender === 'male') {
      idealWeight = height - (100 + (height - 100) / 20);
    } else if (gender === 'female') {
      idealWeight = height - (100 + (height - 100) / 10);
    } else {
      alert('Please select a gender');
      return;
    }
  
    document.getElementById('result').innerText = `Ваш идеальный вес: ${idealWeight.toFixed(2)} кг`;
  });
  