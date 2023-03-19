function calculateTax(income: number, taxYear: ): number {
    if (income < 50_000)
        return income*1.2;
    return income*1.3;    
}