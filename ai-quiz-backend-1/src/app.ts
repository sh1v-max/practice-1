import express from 'express'

const app = express()

// middleware
app.use(express.json())

// routes
app.get('/', (req, res) => {
  res.json({
    message: 'AI Quiz API is running',
  })
})

export default app
