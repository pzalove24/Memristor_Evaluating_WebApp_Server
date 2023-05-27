const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')
const port = new SerialPort({
    path: 'COM3',
    baudRate: 9600
})

const parser = port.pipe(new ReadlineParser({delimiter: '\r\n'}))

parser.on('data', onData)


function onData(data) {
    console.log("on Data at COM3 : "+ data);
}

// parser.write("1234", onSend);

// function onSend(send) {
//     console.log("on Sent data at COM3 : " + send);
// }