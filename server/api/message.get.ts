import { PostScheme } from "../model/post.schema"

export default defineEventHandler(async (event) => {
  const posts = await PostScheme.find({})
  return posts
})
