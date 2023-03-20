// Set up constants for KRA, NHIF, and NSSF values
const KRA_PERCENTAGE = 0.1;
const NHIF_VALUES = [
  { min: 0, max: 5999, rate: 150 },
  { min: 6000, max: 7999, rate: 300 },
  { min: 8000, max: 11999, rate: 400 },
  { min: 12000, max: 14999, rate: 500 },
  { min: 15000, max: 19999, rate: 600 },
  { min: 20000, max: 24999, rate: 750 },
  { min: 25000, max: 29999, rate: 850 },
  { min: 30000, max: 34999, rate: 900 },
  { min: 35000, max: 39999, rate: 950 },
  { min: 40000, max: 44999, rate: 1000 },
  { min: 45000, max: 49999, rate: 1100 },
  { min: 50000, max: 59999, rate: 1200 },
  { min: 60000, max: 69999, rate: 1300 },
  { min: 70000, max: 79999, rate: 1400 },
  { min: 80000, max: 89999, rate: 1500 },
  { min: 90000, max: 99999, rate: 1600 },
  { min: 100000, max: Number.POSITIVE_INFINITY, rate: 1700 },
];
const NSSF_PERCENTAGE = 0.06;

// Get input values from user
const basicSalary = Number(prompt("Enter basic salary:"));
const benefits = Number(prompt("Enter benefits:"));

// Calculate gross salary
const grossSalary = basicSalary + benefits;

// Calculate payee (tax) using KRA values
let payee = 0;
if (grossSalary > 24000) {
  const taxableIncome = grossSalary - 24000;
  if (taxableIncome > 16000) {
    payee += 1600;
    payee += (taxableIncome - 16000) * 0.3;
  } else if (taxableIncome > 11000) {
    payee += 1100;
    payee += (taxableIncome - 11000) * 0.25;
  } else if (taxableIncome > 7000) {
    payee += 700;
    payee += (taxableIncome - 7000) * 0.2;
  } else if (taxableIncome > 5000) {
    payee += 500;
    payee += (taxableIncome - 5000) * 0.15;
  } else {
    payee += taxableIncome * 0.1;
  }
}
payee = Math.round(payee);

// Calculate NHIF deductions using NHIF_VALUES
let nhifDeductions = 0;
for (const range of NHIF_VALUES) {
  if (grossSalary >= range.min && grossSalary <= range.max) {
    nhifDeductions = range.rate;
    break;
  }
}

// Calculate NSSF deductions
const nssfDeductions = Math.round(grossSalary * NSSF_PERCENTAGE);

// Calculate net salary
const netSalary = grossSalary

console.log(grossSalary)

