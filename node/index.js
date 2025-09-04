const cluster = require("cluster")
const os = require("os")
const express = require('express')


const toatlCpu = os.cpus().length
console.log(toatlCpu);

if (cluster.isPrimary) {
    for (let i = 0; i < toatlCpu; i++) {
        cluster.fork()
    }
} else {
    const app = express()
    app.get("/", (req, res) => {
        return res.json({
            message: `Hello from express server ${process.pid}`
        })
    })
    app.listen(3000, () => {
        console.log(`server is runnings ${process.pid}`);
    })
}
