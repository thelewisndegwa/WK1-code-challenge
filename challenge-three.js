// create functions for the deductions and gross salary
//calculate gross/basic salary
function netSalary (basic_salary, benefits){
    Payee = findPayee (basic_salary);
       console.log (Payee);
    NHIF = findNHIF (basic_salary);
        console.log (NHIF);
    NSSF = findNSSF (basic_salary);
        console.log (NSSF);
 netSalary = basic_salary + benefits - (Payee + NHIF + NSSF);
    return netSalary;
}
// calculate payee
function findPayee (basic_salary){
let Payee = 0;
    if (basic_salary <= 288000){
        Payee = (10/100) * basic_salary;
    }
    else if (basic_salary >= 288001 && basic_salary <= 388000){
        Payee = (25/100) * basic_salary;
    }
     else {
        Payee = (30/100) * basic_salary;
     }
     return Payee;
}
        //console.log (findPayee);
// calculate the deductions starting with NHIF
function findNHIF (basic_salary){
let NHIF = 0;
    if (basic_salary >= 0 && basic_salary <= 5999){
        NHIF = basic_salary - 150;
    }
     else if (basic_salary >= 6000 && basic_salary <= 7999){
        NHIF = basic_salary - 300;
     }
     else if (basic_salary >= 8000 && basic_salary <= 11999){
        NHIF = basic_salary - 400;
     }
     else if (basic_salary >= 12000 && basic_salary <= 14999){
        NHIF = basic_salary - 500;
     }
     else if (basic_salary >= 15000 && basic_salary <= 19999){
        NHIF = basic_salary - 600;
     }
     else if (basic_salary >= 20000 && basic_salary <= 24999){
        NHIF = basic_salary - 750;
     }
     else if (basic_salary >= 25000 && basic_salary <= 29999){
        NHIF = basic_salary - 850;
     }
     else if (basic_salary >= 30000 && basic_salary <= 34999){
        NHIF = basic_salary - 900;
     }
     else if (basic_salary >= 35000 && basic_salary <= 39999){
        NHIF = basic_salary - 950;
     }
     else if (basic_salary >= 40000 && basic_salary <= 44999){
        NHIF = basic_salary - 1000;
     }
     else if (basic_salary >= 45000 && basic_salary <= 49999){
        NHIF = basic_salary - 1100;
     }
     else if (basic_salary >= 50000 && basic_salary <= 59999){
        NHIF = basic_salary - 1200;
     }
     else if (basic_salary >= 60000 && basic_salary <= 69999){
        NHIF = basic_salary - 1300;
     }
     else if (basic_salary >= 70000 && basic_salary <= 79999){
        NHIF = basic_salary - 1400;
     }
     else if (basic_salary >= 80000 && basic_salary <= 89999){
        NHIF = basic_salary - 1500;
     }
     else if (basic_salary >= 90000 && basic_salary <= 99999){
        NHIF = basic_salary - 1600;
     }
     else {
        NHIF = basic_salary - 1700;
     }
        return NHIF;
}
            //console.log (findNHIF);
// calculate NSSF deductions
function findNSSF (basic_salary){
let NSSF = 0;
    if (basic_salary <= 72000){
        NSSF = (6/100) * basic_salary;
    }
    else if (basic_salary >= 72001 && basic_salary <= 216000){
        NSSF = (6/100) * basic_salary;
    }
    else {
        NSSF = (5/100) * basic_salary;
    }
        return NSSF;
}
                //console.log (findNSSF);
console.log (netSalary (300000, 150000));