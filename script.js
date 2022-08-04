let amount = document.getElementById('amount');
let apr = document.getElementById('rate');
let term = document.getElementById('term');

const calculateMonthly = () => {
    monthly = (amount + (apr / 100 * term)) / (12 * term);
    document.getElementById('m').innerHTML = `Monthly Payment ($): ${monthly}`;
}

