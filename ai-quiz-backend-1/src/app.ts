import express from 'express'
import quizRoutes from './routes/quiz.routes'

const app = express()

// middleware
app.use(express.json())

// routes
app.use('/api/quizzes', quizRoutes)

// routes
app.get('/', (req, res) => {
  res.json({
    message: 'AI Quiz API is running',
  })
})

export default app
