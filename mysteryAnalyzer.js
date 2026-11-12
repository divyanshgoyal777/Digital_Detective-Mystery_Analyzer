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

module.exports = {
  calculateSuspicion,
  findMostSuspiciousEmployee,
};
