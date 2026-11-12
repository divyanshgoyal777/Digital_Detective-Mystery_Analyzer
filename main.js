const data = require("./data");
const mysteryAnalyzer = require("./mysteryAnalyzer");

// Calculate individual suspicion scores
// for (const employee of data.employees) {
//   console.log(mysteryAnalyzer.calculateSuspicion(employee));
// }

// Find the most suspicious employee
// console.log(
//   mysteryAnalyzer.findMostSuspiciousEmployee(data.employees)
// );

// Rank suspects
console.log(mysteryAnalyzer.rankSuspects(data.employees, "desc"));
console.log(mysteryAnalyzer.rankSuspects(data.employees, "asc"));
