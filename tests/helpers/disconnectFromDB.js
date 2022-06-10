/* eslint-disable no-undef */
const db = require('../../src/shared/utils/database');

afterAll(() => db.$disconnect());
