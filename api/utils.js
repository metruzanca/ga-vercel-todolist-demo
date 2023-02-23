import mongoose from 'mongoose'

export function parseObjectId(id) {
  try {
    return new mongoose.Types.ObjectId(id)
  } catch (error) {
    return null
  }
}

/**
 * When we pass a boolean in a url, its converted to a string.
 * "false" is a truthy value, so to correctly convert a stringified boolean to boolean
 * we can use this neat trick. 
 */
export function toBool(bool) {
  return bool === 'true'
}