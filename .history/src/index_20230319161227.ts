function calculateTax(income: number, taxYear: number): number {
    if (income < 50_000)
        return income*1.2;
    else return income*1.3;  
    if (taxYear < 2022)
        return income*1.4;
}

cglcalculateTax(10_000, 2020);