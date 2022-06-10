/* eslint-disable no-undef */
const db = require('../../src/shared/utils/database');
const databaseTables = require('./databaseTables');

beforeEach(() => Promise.allSettled(databaseTables.map(
  (table) => db.$executeRawUnsafe(`UPDATE sqlite_sequence SET seq = 0 WHERE name = "${table}"`),
)));
