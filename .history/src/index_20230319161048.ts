function calculateTax(income: number, taxYear: number): number {
    if (income < 50_000)
        return income*1.2;
    return income*1.3;  
    else if (taxYear < 2022)
        return income*
}