import type { Request, Response } from 'express'

export const getAllQuizzes = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'fetching all quizzes',
  })
}

// GET /api/quizzes/123
export const getQuizById = (req: Request, res: Response) => {
  const quizId = req.params.id
  // extract the id from the url

  res.status(200).json({
    success: true,
    message: 'fetching quiz by ID',
    quizId,
  })
}

// GET /api/quizzes?difficulty=easy
export const filterQuizzes = (req: Request, res: Response) => {
  const difficulty = req.query.difficulty

  res.status(200).json({
    success: true,
    message: "filtering quizzes",
    difficulty
  })
}

export const createQuiz = (req: Request, res: Response) => {
  const { topic, difficulty } = req.body
  
  res.status(201).json({
    success: true,
    message: "quiz creation requested",
    topic,
    difficulty
  })
}