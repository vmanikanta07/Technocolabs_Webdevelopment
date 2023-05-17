import {cadre, tax, benefits ,bonus, reimbursement} from './employee1.mjs';
import Employeeeee from "./employee1.mjs";


function getEmployeeInformation(inputSalary) {
    Employeeeee.salary = inputSalary;
    console.log('Cadre: ' + cadre());
    console.log('Tax: ' + tax());
    console.log('Benefits: ' + benefits());
    console.log('Bonus: ' + bonus());
    console.log('Reimbursement Eligibility: ' + reimbursement() + '\n');
  }
  
  getEmployeeInformation(10000);
  getEmployeeInformation(50000);
  getEmployeeInformation(100000);