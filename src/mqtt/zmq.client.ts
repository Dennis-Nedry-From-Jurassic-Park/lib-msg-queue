const zmq = require("zeromq")

const port = 5555
// https://www.npmjs.com/package/zeromq#more-examples
async function run() {
    const sock = new zmq.Push

    await sock.bind(`tcp://*:${port}`)
    console.log(`Producer bound to port ${port}`)

    while (true) {
        await sock.send("some work")
        await new Promise(resolve => { setTimeout(resolve, 5000) })
    }
}

run()