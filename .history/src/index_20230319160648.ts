function calculateTax(income: number, tax): number {
    if (income < 50_000)
        return income*1.2;
    return income*1.3;    
}