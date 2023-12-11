function calculate() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
  
    fetch('http://localhost:3000/calculate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ num1, num2 }),
    })
    .then(response => response.blob())
    .then(blob => {
      const resultDiv = document.getElementById('result');
      resultDiv.innerHTML = `<p>Result: ${parseFloat(num1) + parseFloat(num2)}</p>`;
    });
  }
  
  function printPdf() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
  
    // Fetch the PDF when the 'Print PDF' button is clicked
    fetch('http://localhost:3000/calculate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ num1, num2 }),
    })
    .then(response => response.blob())
    .then(blob => {
      // Display the PDF in the iframe
      const pdfViewer = document.getElementById('pdfViewer');
      pdfViewer.src = URL.createObjectURL(blob);
      pdfViewer.style.display = 'block';
  
      // Print the PDF
      if (pdfViewer.contentWindow) {
        pdfViewer.contentWindow.print();
      } else {
        // For older browsers
        pdfViewer.contentDocument.print();
      }
    });
  }
  