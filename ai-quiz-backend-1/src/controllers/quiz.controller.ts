import type { Request, Response } from 'express'

export const getAllQuizzes = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'fetching all quizzes',
  })
}
