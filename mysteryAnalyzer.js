function calculateSuspicion(employee) {
  let suspicionScore = 0;

  suspicionScore += employee.failedAttempts * 10;
  suspicionScore += employee.loginHour < 6 || employee.loginHour > 22 ? 20 : 0;
  suspicionScore += employee.accessedSecretFile ? 30 : 0;

  return suspicionScore;
}

module.exports = {
  calculateSuspicion,
};
