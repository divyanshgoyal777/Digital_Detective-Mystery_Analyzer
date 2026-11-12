# Digital Detective - Mystery Analyzer

A JavaScript application that analyzes employee activity records, calculates suspicion scores, ranks employees, and identifies suspicious patterns.

## Project scenario

A confidential company file has gone missing. You are given activity records for several employees and must build functions that analyze their login behavior and file access.

## Tech and concepts

- JavaScript
- CommonJS modules (`require` and `module.exports`)
- Functions, objects, arrays, loops, and conditionals
- Searching, sorting, aggregation, and string formatting
- Stable sorting, input immutability, and time/space complexity

No external libraries are required.

## Employee data

Each employee is represented by an object with this structure:

```js
{
  id: 1,
  name: "Alice",
  loginAttempts: 2,
  failedAttempts: 0,
  loginHour: 9, // 24-hour format: 0–23
  accessedSecretFile: false
}
```

Create a `data.js` file that exports an array of employee records as `employees`. You may use the sample records below or create your own:

```js
const employees = [
  { id: 1, name: "Alice", loginAttempts: 2, failedAttempts: 0, loginHour: 9, accessedSecretFile: false },
  { id: 2, name: "Bob", loginAttempts: 5, failedAttempts: 4, loginHour: 2, accessedSecretFile: true },
  { id: 3, name: "Charlie", loginAttempts: 3, failedAttempts: 1, loginHour: 11, accessedSecretFile: false },
  { id: 4, name: "David", loginAttempts: 4, failedAttempts: 3, loginHour: 23, accessedSecretFile: true },
  { id: 5, name: "Eva", loginAttempts: 1, failedAttempts: 0, loginHour: 10, accessedSecretFile: false }
];

module.exports = { employees };
```

## Suspicion scoring rules

Calculate each employee's score using these rules:

| Activity | Points |
|---|---:|
| Each failed login attempt | +10 |
| Login before 6:00 AM | +20 |
| Login after 10:00 PM | +20 |
| Access to the confidential file | +30 |

Boundary conditions:

- Exactly 6:00 AM does not count as an unusually early login.
- Exactly 10:00 PM does not count as an unusually late login.
- Multiple rules can contribute to the same employee's score.

For the sample records, the expected scores are:

| Employee | Score |
|---|---:|
| Alice | 0 |
| Bob | 90 |
| Charlie | 10 |
| David | 80 |
| Eva | 0 |

## Functional requirements

Implement the following functions in `mysteryAnalyzer.js`.

### 1. `calculateSuspicion(employee)`

- Accept one employee object.
- Return that employee's numeric suspicion score.
- Do not modify the employee object.

### 2. `calculateAllSuspicionScores(employees)`

- Accept an array of employees.
- Return an array of objects in this shape: `{ employee, suspicionScore }`.
- Each `employee` value must contain the complete original employee object.
- Reuse `calculateSuspicion()`.
- Do not modify the input array or employee objects.

### 3. `findMostSuspiciousEmployee(employees)`

- Return the complete employee object with the highest score.
- If multiple employees share the highest score, return the first one in the original array.
- Return `null` for an empty array.

### 4. `rankSuspects(employees, order = "desc")`

- Return all employees as `{ employee, suspicionScore }` records.
- Support `"desc"` (highest score first) and `"asc"` (lowest score first).
- Default to `"desc"` when `order` is omitted.
- Preserve the original relative order of employees with equal scores in either direction.
- Return `[]` for an empty array.
- Reject any order other than `"asc"` or `"desc"` with a clear error.
- Do not modify the original employee array or employee objects.

Use a stable sorting approach. You may implement Insertion Sort, Bubble Sort, or another suitable algorithm. Do not use the built-in `sort()` if you want to practise implementing a sorting algorithm manually.

### 5. `generateInvestigationReport(employees, order = "desc")`

- Return a readable string report.
- Include the total number of employees and the selected ranking order.
- List every employee in the selected ranking order.
- For each employee, include their name, suspicion score, and risk level.
- Risk levels:
  - `0–29`: Low
  - `30–59`: Medium
  - `60 and above`: High
- Use the same `"asc"` / `"desc"` behavior and validation as `rankSuspects()`.
- Return `"No employee records found."` for an empty array.

### 6. `analyzeSuspiciousPatterns(employees)`

Return an object containing:

- `totalEmployees`: number of employee records.
- `highRiskEmployees`: names of employees with a score of 60 or above.
- `employeesWithSecretAccess`: names of employees whose `accessedSecretFile` is `true`.
- `employeesWithMultipleFailures`: names of employees with more than 2 failed attempts.
- `averageSuspicionScore`: average score across all employees, rounded to 2 decimal places.

For empty input, return `totalEmployees: 0`, empty arrays for all three employee lists, and `averageSuspicionScore: 0`.

## General requirements

- Use plain JavaScript; no external libraries are needed.
- Reuse existing functions instead of duplicating scoring logic.
- Do not mutate the original employee array or employee objects.
- Handle empty input, ties, and the specified time boundaries.

## Suggested project structure

```text
digital-detective/
├── data.js
├── mysteryAnalyzer.js
├── index.js
└── README.md
```

- `data.js`: exports the employee records.
- `mysteryAnalyzer.js`: contains the analysis functions and exports the required public functions using CommonJS.
- `index.js`: imports the data and analyzer modules and calls the functions to display results.
- `README.md`: project description and requirements.

Export `calculateSuspicion`, `findMostSuspiciousEmployee`, `rankSuspects`, `generateInvestigationReport`, and `analyzeSuspiciousPatterns`. Export `calculateAllSuspicionScores` as well if you want it to be directly accessible; it may remain an internal helper.

## Example usage

```js
const data = require("./data");
const mysteryAnalyzer = require("./mysteryAnalyzer");

console.log(mysteryAnalyzer.rankSuspects(data.employees, "desc"));
console.log(mysteryAnalyzer.rankSuspects(data.employees, "asc"));
console.log(mysteryAnalyzer.generateInvestigationReport(data.employees, "desc"));
console.log(mysteryAnalyzer.analyzeSuspiciousPatterns(data.employees));
```

### The goal is not just to produce the correct output. The goal is to demonstrate strong JavaScript fundamentals, logical reasoning, algorithmic thinking, and clean coding practices.

# Happy investigating! 🔍