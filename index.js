<!DOCTYPE html>
<html>
<head>
  <title>EMI Calculator</title>
</head>
<body>
  <h2>EMI Calculator</h2>

  <label>Loan Amount: </label>
  <input type="number" id="loanAmount" value="160468285"><br><br>

  <label>Interest Rate (% per annum): </label>
  <input type="number" id="interestRate" value="4"><br><br>

  <label>Tenure (Years): </label>
  <input type="number" id="tenure" value="8"><br><br>

  <button onclick="calculateEMI()">Calculate EMI</button>

  <h3 id="emiResult"></h3>
  <h3 id="interestResult"></h3>
  <h3 id="totalResult"></h3>

  <script>
    function calculateEMI() {
      let P = parseFloat(document.getElementById("loanAmount").value); // Principal
      let annualRate = parseFloat(document.getElementById("interestRate").value);
      let years = parseInt(document.getElementById("tenure").value);

      let R = annualRate / 12 / 100;  // Monthly interest rate
      let N = years * 12;             // Total months

      // EMI formula
      let EMI = P * R * Math.pow(1 + R, N) / (Math.pow(1 + R, N) - 1);
      let totalAmount = EMI * N;
      let interest = totalAmount - P;

      document.getElementById("emiResult").innerText = Monthly EMI: ₹ ${EMI.toFixed(2)};
      document.getElementById("interestResult").innerText = Total Interest: ₹ ${interest.toFixed(0)};
      document.getElementById("totalResult").innerText = Total Amount Payable: ₹ ${totalAmount.toFixed(0)};
    }
  </script>
</body>
</html>
