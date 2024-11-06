import { defineMongooseModel } from '#nuxt/mongoose'

export const PostScheme = defineMongooseModel({
    name: "Post",
    schema: {
        name: {
            type: 'string',
            required: true,
            unique: false
        },
        text: {
            type: 'string',
            required: true,
            unique: false
        },
        timestamp: {
            type: "string",
            required: true,
            unique: false
        }
    }
})