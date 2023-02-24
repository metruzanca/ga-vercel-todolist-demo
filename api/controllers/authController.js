import { hash, compare } from 'bcrypt'
import { SALT_ROUNDS } from '../constants.js'
import User from '../models/userModel.js'

/*
  Hashing is a one-way, deterministic operation that takes a string and turns it into another string always with a fixed length.
  By "One-way" we mean its literally impossible to get the original string given a hash. (Why? Math, specifically cryptography)
  By "deterministic" we mean that given the same string exact, the same hash will always be returned, every time.
  This makes hashing perfect for storing passwords, without actually knowing the password. We can just store the hash.

  Salts on the other had, are a bit of random information that gets added into the hash function along side the password.
  The role of salt is to make "rainbow table attack" impossible.
*/

export async function login(req, res) {
  const { username, password } = req.body
  const user = await User.findOne({ username })
  if (!user) {
    return res.status(404).json({
      message: 'user not found'
    })
  }


  const match = await compare(password, user.password)
  if (!match) {
    return res.status(404).json({
      message: 'wrong password'
    })
  }

  // TODO authenticate user
}

export async function logout(req, res) {
  // TODO dump cookie and delete session from usermodel
}

export async function register(req, res) {
  const { username, password } = req.body
  const user = await User.findOne({ username })
  if (user) {
    return res.status(406).json({
      message: 'username already exists'
    })
  }
  const hashedPassword = await hash(password, SALT_ROUNDS)
  
  // TODO create user
}

export async function changePassword(req, res) {
  const { username, oldPassword, newPassword } = req.body
  const user = await User.findOne({ username })
  if (!user) {
    return res.status(404).json({
      message: 'user not found'
    })
  }


  const match = await compare(oldPassword, user.password)
  if (!match) {
    return res.status(404).json({
      message: 'wrong password'
    })
  }

  const newHash = hash(newPassword, SALT_ROUNDS)

  const result = await User.findByIdAndUpdate(user._id, { password: newHash })

  if (!result) {
    return res.status(404).json({
      message: 'Failed to update password'
    })
  }

  return res.json({
    message: 'Password updated. All other sessions have been logged out.'
  })

  // TODO delete all current sessions, except for this one.
}