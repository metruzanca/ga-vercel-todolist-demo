import mongoose from 'mongoose'

/** Makes sure the id is something mongoose doesn't complain about */
export function parseObjectId(id) {
  if (mongoose.Types.ObjectId.isValid(id)){
    //@ts-ignore
    return mongoose.Types.ObjectId(id)
  } else {
    return null
  }
  // try {
  //   return mongoose.Types.ObjectId(id)
  // } catch (error) {
  //   return null
  // }
}

/**
 * When we pass a boolean in a url, its converted to a string.
 * "false" is a truthy value, so to correctly convert a stringified boolean to boolean
 * we can use this neat trick. 
 */
export function toBool(bool) {
  return bool === 'true'
}