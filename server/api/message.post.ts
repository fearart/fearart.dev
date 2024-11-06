import { Post } from "~/types"
import { PostScheme } from "../model/post.schema"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  if (!body.name || !body.text) { throw createError({statusCode: 400, message: "Missing required data"})}
  body.timestamp = new Date(body.timestamp).toDateString() + " "+ new Date(body.timestamp).toLocaleTimeString().slice(0,5)
  return new PostScheme({
    ...body
  }).save()
})
