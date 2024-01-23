import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get("/test", async (req, res) => {
  return res.status(200).json({
    name: "João Pedro",
    age: 21
  })
})

app.listen(8080, () => {
  console.log(`typescript server running on port ${8080}`);
})