let Employee1 = {
    salary : 100000,
}

const payGrades = {
  entryLevel: { taxMultiplier: .05, benefits: ['health'], minSalary: 10000, maxSalary: 49999 },
  midLevel: { taxMultiplier: .1, benefits: ['health', 'housing'], minSalary: 50000, maxSalary: 99999 },
  seniorLevel: { taxMultiplier: .2, benefits: ['health', 'housing', 'wellness', 'gym'], minSalary: 100000, maxSalary: 200000 }
};

function getCadre() {
  if (Employee1.salary >= payGrades.entryLevel.minSalary && Employee1.salary <= payGrades.entryLevel.maxSalary) {
    return 'entryLevel';
  } else if (Employee1.salary >= payGrades.midLevel.minSalary && Employee1.salary <= payGrades.midLevel.maxSalary) {
    return 'midLevel';
  } else return 'seniorLevel';
}

function calculateTax() {
  return payGrades[getCadre()].taxMultiplier * Employee1.salary;
}

function getBenefits() {
  return payGrades[getCadre()].benefits.join(', ');
}

function calculateBonus() {
  return .02 * Employee1.salary;
}

function reimbursementEligibility() {
  let reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };
  let totalBenefitsValue = 0; 
  let Employee1Benefits = payGrades[getCadre()].benefits;
  for (let i = 0; i < Employee1Benefits.length; i++) {
    totalBenefitsValue += reimbursementCosts[Employee1Benefits[i]];
  }
  return totalBenefitsValue;
}

export { getCadre as cadre, getBenefits as benefits,calculateTax as tax, calculateBonus as bonus, reimbursementEligibility as reimbursement};
export default Employee1;