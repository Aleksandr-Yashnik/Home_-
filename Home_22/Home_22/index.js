function delay(value) {
    return new Promise((resolve, reject) => {
      if (typeof value !== 'number') {
        reject("The argument is not a number");
      } else {
        setTimeout(() => {
          resolve(value * 2);
        }, 5000);
      }
    });
  }
  
  function processingDelay(value) {
    delay(value)
      .then(result => {
        console.log(`Resolved: ${result}`);
      })
      .catch(error => {
        console.log(`Rejected: ${error}`);
      });
  }
  
  // Демонстрация работы
  processingDelay(10); // Ожидаемый результат: Resolved: 20 через 5 секунд
  processingDelay('text'); // Ожидаемый результат: Rejected: The argument is not a number