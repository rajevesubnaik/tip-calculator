const form = document.getElementsByTagName('form')[0];
const inputBill = document.getElementById('input-bill');
const inputUsers = document.getElementById('input-users');
const select = document.getElementsByTagName('select')[0];
const tip = document.getElementById('tip-amount');
const total = document.getElementById('total-amount');
const eachPerson = document.getElementById('person-amount');

const optionTip = [
  {
    tip: .20,
    text: "Great - 20%"
  },
  {
    tip: .15,
    text: "Good - 15%"
  },
  {
    tip: .10,
    text: "Okay - 10%"
  },
  {
    tip: .02,
    text: "Just awful - 2%"
  }
];

for (let i = 0; i < optionTip.length; i++) {
  const option = document.createElement('option');
  option.value = optionTip[i].tip;
  option.textContent = optionTip[i].text;
  select.appendChild(option);
}

// still need error for not currency, whole number people
// tip total each person owes

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const results = document.getElementsByClassName('results')[0];
  results.style.display = 'block';
  const selectIndex = select.selectedIndex;
  const optionValue = document.getElementsByTagName('option')[selectIndex].value;
  const tipAmt = +inputBill.value * +optionValue;
  const totalBill = tipAmt + +inputBill.value;
  const personOwes = totalBill / +inputUsers.value;
  tip.textContent = tipAmt.toFixed(2);
  total.textContent = totalBill.toFixed(2);
  eachPerson.textContent = personOwes.toFixed(2);
})