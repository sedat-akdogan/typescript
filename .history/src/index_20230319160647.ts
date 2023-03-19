function calculateTax(income: number, t): number {
    if (income < 50_000)
        return income*1.2;
    return income*1.3;    
}