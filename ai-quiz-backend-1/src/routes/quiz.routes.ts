import { Router } from 'express'
import { getAllQuizzes } from '../controllers/quiz.controller'

const router = Router()

router.get('/', getAllQuizzes)

export default router
