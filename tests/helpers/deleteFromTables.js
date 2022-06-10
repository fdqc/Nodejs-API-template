/* eslint-disable no-undef */
const db = require('../../src/shared/utils/database');
const databaseTables = require('./databaseTables');

beforeEach(() => Promise.all(databaseTables.map(
  (table) => db.$executeRawUnsafe(`DELETE FROM ${table}`),
)));
