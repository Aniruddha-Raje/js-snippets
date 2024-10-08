var winston = require('winston');
var envData = require('dotenv').config({path: 'server.env'})
require('winston-daily-rotate-file');

var levelLog = 'debug';
var winstonTransports = [];

const logDTFormat = () => (new Date().toFormat('DD MMM YYYY HH24:MI:SS'));

// Winston Rotate File Logs
var transportDailyRotate = new (winston.transports.DailyRotateFile)({
	filename: './logs/app',
	datePattern: 'yyyy-MM-dd.log',
	prepend: false,
	level: levelLog,
	timestamp: function() {
    var dateTime = new Date(Date.now());
		return dateTime.toFormat('DD/MM/YYYY HH24:MI:SS');
    }
});

winstonTransports.push(transportDailyRotate);

// Winston Console Log 
var trasportConsole = new (winston.transports.Console)({
	timestamp: logDTFormat,
	colorize: true,
	level: levelLog
});

winstonTransports.push(trasportConsole);

// Winston Config
winston.configure({
	level: levelLog,
	transports: winstonTransports
});

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
      //
      // - Write to all logs with level `info` and below to `combined.log` 
      // - Write all logs error (and below) to `error.log`.
      //
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' })
    ]
  });
   
  //
  // If we're not in production then log to the `console` with the format:
  // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
  // 
  if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.simple()
    }));
  }

// Validate Server Configuration
if (envData.error) {
	winston.error('[APP-CONFIG]:', JSON.stringify(envData.error))
	winston.error('[APP-CONFIG]:', 'Error on Server Configuration')
	return
}

var test = function(){
  winston.error("ERROR log","ERROR log");
  winston.info("INFO log");
  winston.debug("DEBUG log");
}
test();