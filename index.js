const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 4000

app.get('/', (req, res) => {
    res.status(200).json({
        status: true,
        message: 'welocme to portfolio api'
    })
})

app.listen(process.env.PORT || PORT, () => console.log(`app service running on port ${PORT}`))