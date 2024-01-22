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

app.listen(8080, () => {
  console.log(`server running on port ${8080}`);
})