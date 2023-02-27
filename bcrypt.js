import bcrypt from 'bcrypt'

const plain = 'password123'
const saltRounds = 10

const hash = await bcrypt.hash(plain, saltRounds)
console.log(hash)

const result = await bcrypt.compare(plain, hash)

console.log(result)