/**
 * You can choose wether you want to use an ORM or not.
 * Feel free to update the contents of this file to fit your needs
 * and create a different repository under /shared/repositories directory.
 */
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = prisma;
