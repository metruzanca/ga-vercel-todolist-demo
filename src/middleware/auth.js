import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../constants'

async function verify(token, secret) {
  return new Promise(resolve => {
    jwt.verify(token, secret, (err, decoded) => {
      resolve([err, decoded])
    })
  })
}


export async function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    return res.status(401).json({ message: 'Missing authorization header' })
  }

  const token = authHeader.split(' ')[1]

  const [err, decoded] = await verify(token, JWT_SECRET)
}