const employees = [
    {
        id: 1,
        name: "Alice",
        loginAttempts: 2,
        failedAttempts: 0,
        loginHour: 9,
        accessedSecretFile: false
    },
    {
        id: 2,
        name: "Bob",
        loginAttempts: 5,
        failedAttempts: 4,
        loginHour: 2,
        accessedSecretFile: true
    },
    {
        id: 3,
        name: "Charlie",
        loginAttempts: 3,
        failedAttempts: 1,
        loginHour: 11,
        accessedSecretFile: false
    },
    {
        id: 4,
        name: "David",
        loginAttempts: 4,
        failedAttempts: 3,
        loginHour: 23,
        accessedSecretFile: true
    },
    {
        id: 5,
        name: "Eva",
        loginAttempts: 1,
        failedAttempts: 0,
        loginHour: 10,
        accessedSecretFile: false
    }
];

module.exports = {
    employees,
}