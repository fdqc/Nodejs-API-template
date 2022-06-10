/* eslint-disable no-undef */
const db = require('../../src/shared/utils/database');

beforeEach(() => db.$executeRawUnsafe('VACUUM;'));
