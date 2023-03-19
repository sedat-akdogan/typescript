// function calculateTax(income: number, taxYear: number): number {
//     if (income < 50_000)
//         return income*1.2;
//     else return income*1.3;  
//     if (taxYear < 2022)
//         return income*1.4;
// }

// calculateTax(10_000, 2020);

// type Employee = {              // Type Aliases
//     readonly id:number,
//     name: string,
//     retire: (date: Date) => void
// }

// let employee: Employee = {
//     id: 1,
//     name: "Alperen",
//     retire: (date: Date)=> {
//         console.log(date);
//     }
// };

// Union types
// function kgToLbs(weight: number | string): number {
//     //Narrowing
//     if (typeof weight === "number")
//         return weight * 2.2;
//     else 
//         return parseInt(weight) * 2.2;
// }


// Literal (exact, specific) type
// type Quantity = 50 | 100;
// let amount: Quantity = 100;

// type Metric = "cm" | "inch";

function greet(name: string | null | undefined) {
    if (name)
        console.log(name.toUpperCase());
    else 
        console.log("Hola!");
}

greet("Sultan");
greet(null);
greet(undefined);

