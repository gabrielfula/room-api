import { Request, Response, NextFunction } from 'express';
import { ErrorMessage } from '../helpers/error';

export function errorHandler(
  error: Error & Partial<ErrorMessage>,
  req: Request, 
  res: Response, 
  next: NextFunction
) {
  const statusCode = error.statusCode ?? 500
	const message = error.statusCode ? error.message : 'Algo deu errado, tente novamente mais tarde.'
	return res.status(statusCode).json({ message })
}