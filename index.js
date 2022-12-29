
const express = require("express")
const routes = require("./src/routes/routes")

const App = express()

App.use(express.json())
App.use(routes)


App.use((error, res) => {
    res.status(error.status || 500)
    res.json({ error: error.messagem })
})

App.listen(3000, () => console.log("Server is running"))