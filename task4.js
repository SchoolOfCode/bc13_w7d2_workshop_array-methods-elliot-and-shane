let sevenTimesTable = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];

let seventySevenTimesTable = [77, 154, 231, 308, 385, 462, 539, 616, 693, 770];


console.log(seventySevenTimesTable.every((e, i) => e === 11*sevenTimesTable[i]));

console.log(seventySevenTimesTable.find((e, i) => e != 11*sevenTimesTable[i]));

console.log(seventySevenTimesTable.findIndex((e, i) => e != 11*sevenTimesTable[i]));