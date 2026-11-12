const data = require("./data");
const mysteryAnalyzer = require("./mysteryAnalyzer");

// Calculate individual suspicion scores
for (const employee of data.employees) {
  console.log(mysteryAnalyzer.calculateSuspicion(employee));
}