function calculateSuspicion(employee) {
  let suspicionScore = 0;

  suspicionScore += employee.failedAttempts * 10;
  suspicionScore += employee.loginHour < 6 || employee.loginHour > 22 ? 20 : 0;
  suspicionScore += employee.accessedSecretFile ? 30 : 0;

  return suspicionScore;
}

function calculateAllSuspicionScores(employees) {
  const suspicionScores = [];

  for (const employee of employees) {
    suspicionScores.push({
      employee: employee,
      suspicionScore: calculateSuspicion(employee),
    });
  }

  return suspicionScores;
}

function findMostSuspiciousEmployee(employees) {
  if (employees.length === 0) return null;

  const suspicionScores = calculateAllSuspicionScores(employees);

  let max = -1;
  let mostSuspiciousEmployee = null;

  for (const suspicion of suspicionScores) {
    if (suspicion.suspicionScore > max) {
      max = suspicion.suspicionScore;
      mostSuspiciousEmployee = suspicion.employee;
    }
  }

  return mostSuspiciousEmployee;
}

function rankSuspects(employees, order = "desc") {
  if (order !== "asc" && order !== "desc") {
    throw new Error('Invalid order. Use "asc" or "desc".');
  }

  if (employees.length === 0) return [];

  const suspicionScores = calculateAllSuspicionScores(employees);

  for (let i = 1; i < suspicionScores.length; i++) {
    const current = suspicionScores[i];
    let j = i - 1;

    while (
      j >= 0 &&
      (order === "asc"
        ? suspicionScores[j].suspicionScore > current.suspicionScore
        : suspicionScores[j].suspicionScore < current.suspicionScore)
    ) {
      suspicionScores[j + 1] = suspicionScores[j];
      j--;
    }

    suspicionScores[j + 1] = current;
  }

  return suspicionScores;
}

function generateInvestigationReport(employees, order = "desc") {
  if (order !== "asc" && order !== "desc") {
    throw new Error('Invalid order. Use "asc" or "desc".');
  }

  if (employees.length === 0) {
    return "No employee records found.";
  }

  const rankedSuspects = rankSuspects(employees, order);

  let report = "INVESTIGATION REPORT\n";
  report += "--------------------\n";
  report += `Employees analyzed: ${employees.length}\n`;
  report += `Ranking order: ${order.toUpperCase()}\n\n`;

  for (let i = 0; i < rankedSuspects.length; i++) {
    const suspect = rankedSuspects[i];

    let riskLevel;

    if (suspect.suspicionScore <= 29) {
      riskLevel = "Low";
    } else if (suspect.suspicionScore <= 59) {
      riskLevel = "Medium";
    } else {
      riskLevel = "High";
    }

    report += `${i + 1}. ${suspect.employee.name}\n`;
    report += `   Suspicion Score: ${suspect.suspicionScore}\n`;
    report += `   Risk Level: ${riskLevel}\n\n`;
  }

  return report.trimEnd();
}

module.exports = {
  calculateSuspicion,
  findMostSuspiciousEmployee,
  rankSuspects,
  generateInvestigationReport,
};
