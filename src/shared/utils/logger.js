const { createLogger, format, transports } = require('winston');
const { environment } = require('../../config');

const {
  combine,
  timestamp,
  printf,
  json,
} = format;

const consoleFormat = printf(({
  level, message, timestamp: timestamps, ...meta
}) => `${timestamps} > ${level}: ${message}. meta: ${JSON.stringify(meta)}`);

const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    json(),
  ),
  transports: [
    // - Write all logs with level `error` and below to `error.log`
    new transports.File({ filename: './storage/logs/error.log', level: 'error' }),
    // - Write all logs with level `info` and below to `combined.log`
    new transports.File({ filename: './storage/logs/combined.log' }),
  ],
});

if (environment !== 'production') {
  try {
    logger.add(new transports.Console({
      level: 'silly',
      format: combine(
        format.simple(),
        consoleFormat,
      ),
    }));
  } catch (error) {
    console.error('e', error);
  }
}

module.exports = logger;
