// https://www.omnicalculator.com/conversion/kg-to-stones-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const stonesRadio = document.getElementById('stonesRadio');
const kgRadio = document.getElementById('kgRadio');

let stones;
let kg = v; 

// labels of the inpust
const variable = document.getElementById('variable');

stonesRadio.addEventListener('click', function() {
  variable.textContent = 'kg';
  kg = v;
  result.textContent = '';
});

kgRadio.addEventListener('click', function() {
  variable.textContent = 'Stones';
  stones = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(stonesRadio.checked)
    result.textContent = `Stones = ${computestones().toFixed(5)}`;

  else if(kgRadio.checked)
    result.textContent = `kg = ${computekg().toFixed(5)}`;
})

// calculation

function computestones() {
  return Number(kg.value) / 6.35;
}

function computekg() {
  return Number(stones.value) * 6.35;
}