import { Router } from 'express'
import {
  createQuiz,
  filterQuizzes,
  getQuizById,
} from '../controllers/quiz.controller'

const router = Router()

// router.get('/', getAllQuizzes)
router.get('/', filterQuizzes);
router.get('/:id', getQuizById);
router.post('/', createQuiz);

export default router
