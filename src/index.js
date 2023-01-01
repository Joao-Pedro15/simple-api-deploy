require("dotenv").config()
const cors = require("cors")
const express = require("express")
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get("/test", async (req, res) => {
  return res.status(200).json({
    name: "João Pedro",
    age: 20
  })
})

app.listen(process.env.PORT, () => { 
  console.log(`server running on port ${process.env.PORT}`);
 })