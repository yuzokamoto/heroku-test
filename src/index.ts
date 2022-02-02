import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.listen(process.env.PORT || 3003, () => console.log("Server running..."))

app.get("/", (req, res) => {
    res.send("Tudo ok")
})