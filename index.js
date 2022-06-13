const express = require('express')
const app = express()
app.use(express.json())
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello world')
})
app.get('/something', (req, res) => {
    res.send('Hello mate')
})
app.post('/something', (req, res) => {
    console.log("The body", req.body)
    res.send('Hello mate')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})