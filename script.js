function calculateEMI() {
    var loanAmount = parseFloat(document.getElementById('loan-amount').value);
    var interestRate = parseFloat(document.getElementById('interest-rate').value);
    var loanTerm = parseFloat(document.getElementById('loan-term').value);

    var monthlyInterest = interestRate / 100 / 12;
    var denominator = Math.pow(1 + monthlyInterest, loanTerm) - 1;
    var emi = (loanAmount * monthlyInterest * Math.pow(1 + monthlyInterest, loanTerm)) / denominator;

    document.getElementById('result').innerHTML = '<p>EMI: ' + emi.toFixed(2) + '</p>';
  }