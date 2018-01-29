/* eslint-disable no-console */
const fs = require('fs');

class Logger {
  constructor(echoFile = '') {
    this.outputEchoFile = echoFile;
    this.colors = {
      white: '\x1b[37m',
      red: '\x1b[31m',
      green: '\x1b[32m',
      blue: '\x1b[34m',
    };
  }

  writeLog(strMessage) {
    console.log(strMessage);

    if (this.outputEchoFile) {
      const colorCodeLength = 5;
      fs.appendFile(
        this.outputEchoFile,
        `${strMessage.slice(colorCodeLength)}\n`,
        () => {}
      );
    }
  }

  formatLog(msg, color) {
    const d = new Date();
    const dateStr = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}` +
                    ` ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

    const outColor = color || this.colors.white;

    return `${outColor}${dateStr} ${msg}`;
  }

  writeLogWithFormat(msg, color) {
    this.writeLog(this.formatLog(msg, color));
  }

  info(msg) {
    const logInfo = '[INFO]';
    this.writeLogWithFormat(`${logInfo} ${msg}`, this.colors.white);
  }

  warning(msg) {
    const logInfo = '[WARNING]';
    this.writeLogWithFormat(`${logInfo} ${msg}`, this.colors.blue);
  }

  error(msg) {
    const logInfo = '[ERROR]';
    this.writeLogWithFormat(`${logInfo} ${msg}`, this.colors.red);
  }

  success(msg) {
    const logInfo = '[SUCCESS]';
    this.writeLogWithFormat(`${logInfo} ${msg}`, this.colors.green);
  }
}

module.exports = Logger;
