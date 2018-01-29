# µLogger

Small logger for Node.js

## Installation
You can install this library using npm:

`npm i --save micralogger`

## Usage

Fist, reuquire the module and then call the exported function with the desired module-name:

```javascript
const ulogger = require('micralogger');
const log = ulogger.logger('Demo');
```

Then, you can call to log functions:

```javascript
log.info('Message');
log.warning('Message');
log.error('Message');
log.success('Message');
```

That code result in the following output:

```
29/1/2018 17:31:11 [INFO] (Demo) Message
29/1/2018 17:31:11 [WARNING] (Demo) Message
29/1/2018 17:31:11 [ERROR] (Demo) Message
29/1/2018 17:31:11 [SUCCESS] (Demo) Message
```
