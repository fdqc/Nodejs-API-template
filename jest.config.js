module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: [
    '<rootDir>/tests/helpers/deleteFromTables.js',
    '<rootDir>/tests/helpers/databaseVacuum.js',
    '<rootDir>/tests/helpers/restoreRowIdSequence.js',
    '<rootDir>/tests/helpers/disconnectFromDB.js',
  ],
};
